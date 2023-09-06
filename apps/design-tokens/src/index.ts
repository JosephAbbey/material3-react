import { Palettes, hexFromArgb, palettesFromSourceColor } from 'design-color';
import puppeteer, { Browser } from 'puppeteer';
import { csvParse } from 'd3-dsv';
import { fileURLToPath } from 'url';
import { writeFile, mkdir, readdir, readFile } from 'fs/promises';
import { dirname, resolve } from 'path';

const tones = [
  0, 4, 6, 10, 12, 17, 20, 22, 24, 30, 40, 50, 60, 80, 87, 90, 92, 95, 96, 98,
  100,
];

export function palettesToCSV(palettes: Palettes) {
  return [
    '"Token","Role","Value"',
    ...Object.entries(palettes).flatMap(([key, palette]) => {
      return tones.map(
        (tone) =>
          '"md.ref.palette.' +
          key +
          tone +
          '","' +
          key
            .replace(/-[a-z]/, (s) => ' ' + s[1]?.toUpperCase())
            .replace(/^[a-z]/, (s) => s.toUpperCase()) +
          '","' +
          hexFromArgb(palette.tone(tone)) +
          '"'
      );
    }),
  ].join('\n');
}

const normalise = (str: string) =>
  str
    .replace(/ [a-zA-Z]|[A-Z]/g, (letter) => ` ${letter.at(-1)?.toLowerCase()}`)
    .replace(/^\d+\./, '')
    .replace(/\((.*)\)/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace('inverse-on', 'on-inverse');

function toCSV(name: string, table: string[][]) {
  const get = (r: number, c: number): string =>
    table[r][c] == '' ? get(r - 1, c) : table[r][c];
  return [
    ...table
      .filter((row) => row.length >= 3)
      .map((row, i) =>
        [
          i == 0
            ? '"Token"'
            : `"md.comp.${name}.${(
                normalise(get(i, 0)) +
                Array(row.length - 3)
                  .fill(null)
                  .map((_, j) =>
                    normalise(
                      get(i, j + 1)
                        .replace('(optional)', '')
                        .replace('(ripple)', '')
                        .match(/\((.*)\)/)?.[1]
                        .replace(',', '-') ?? ''
                    )
                  )
                  .filter((v) => v != '')
                  .map((v) => '-' + v)
                  .join()
              ).replace(/^(.*)-error$/, (_, s) => 'error-' + s)}.${Array(
                row.length - 3
              )
                .fill(null)
                .map((_, j) => normalise(get(i, j + 1)))
                .join('.')}"`,
          ...row.map((cell) => (cell == '' ? '' : `"${cell}"`)),
        ].join(',')
      ),
  ].join('\n');
}

export default async function scrape(
  browser: Browser,
  name: string,
  url: string,
  id: string,
  postprocess: (table: string[][]) => string = (table) => toCSV(name, table)
) {
  const page = await browser.newPage();

  // Go to your site
  await page.goto(url);

  const root = await page.waitForSelector('body >>> [id="' + id + '"]');

  if (!root) throw 'Unable to get table in page';

  const out = postprocess(
    await root.$eval('table', (table) => {
      /** They made typos */
      const typos = (s: string | undefined) =>
        (s ?? '')
          .replaceAll('defafult', 'default')
          .replaceAll('Atribute', 'Attribute')
          .replaceAll('Token or value', 'Value')
          .replaceAll('Default value', 'Value')
          .replaceAll(', SHAPE_FAMILY', ' SHAPE_FAMILY')
          .replace(/\s*only\)/, ')')
          .replace(/toggle\s*-\s*((?:un)?selected)/, (_, s) => s)
          .replace(/no toggle\s*-\s*default/, 'default')
          .replace(/\bHover\b/, 'Hovered')
          .replace(/\bFocus\b/, 'Focused')
          .replace('inverse-on', 'on-inverse')
          .replace(
            'md.sys.color.surface-container highest',
            'md.sys.color.surface-container-highest'
          )
          .replaceAll(', ', ',');
      return [
        [...table.querySelectorAll('thead tr th')].map((cell) =>
          typos(cell.innerText.replace(/\s+/g, ' ')).trim()
        ),
        //                                          ↓ ensure at-least three children
        ...[...table.querySelectorAll('tbody tr')].map((row) => [
          typos(row.querySelector('th')?.innerText.replace(/\s+/g, ' ')).trim(),
          ...[...row.querySelectorAll('td')].map((cell) =>
            typos(
              cell.innerText
                .replace(/\s+/g, ' ')
                .replace(/^([^m]|m[^d]|md[^.]).* ?- ?/, (s: string) =>
                  s.replace(/ ?- ?/, ' - ')
                )
            ).trim()
          ),
        ]),
      ];
    })
  );

  page.close();

  return out;
}

export function CSVToCSS(csv: string): string {
  const value = (t: string, s: string) => {
    const o = s
      .replace(
        /md\.(sys|ref|comp)(\.[a-z0-9-]+)+/g,
        (t) => 'var(--' + t.replaceAll('.', '-') + ')'
      )
      .replace(/((\d+.)?\d+)dp/g, (_, n) => n + 'px')
      .replace(/((\d+.)?\d+)sp/g, (_, n) => parseFloat(n) / 16 + 'rem')
      .replace('- SHAPE_FAMILY_CIRCULAR', '50%')
      .replace(' SHAPE_FAMILY_ROUNDED_CORNERS', '')
      .replace('Linear', 'linear');

    return t.includes('easing')
      ? 'cubic-bezier(' + o + ')'
      : o.replaceAll(',', ' ');
  };

  const data = csvParse(csv);
  if (Object.hasOwn(data[0], 'Value (light)'))
    return (
      '@media screen and (prefers-color-scheme: light) {\n  *, ::backdrop {\n' +
      data
        .map((row) =>
          row.Token
            ? '    --' +
              row.Token.replaceAll('.', '-') +
              ': ' +
              value(row.Token, row['Value (light)'] ?? 'unset') +
              ';'
            : ''
        )
        .join('\n') +
      '\n  }\n}\n@media screen and (prefers-color-scheme: dark) {\n  *, ::backdrop {\n' +
      data
        .map((row) =>
          row.Token
            ? '    --' +
              row.Token.replaceAll('.', '-') +
              ': ' +
              value(row.Token, row['Value (dark)'] ?? 'unset') +
              ';'
            : ''
        )
        .join('\n') +
      '\n  }\n}'
    );
  return (
    '*, ::backdrop {\n' +
    data
      .map((row) =>
        row.Token
          ? '  --' +
            row.Token.replaceAll('.', '-') +
            ': ' +
            value(row.Token, row.Value ?? 'unset') +
            ';'
          : ''
      )
      .join('\n') +
    '\n}'
  );
}

export async function generate() {
  const components = (
    (await import('./components.json', {
      assert: { type: 'json' },
    })) as unknown as {
      default: ([string, string] | [string, string, string])[];
    }
  ).default;

  await Promise.all([
    mkdir('tokens/baseline', {
      recursive: true,
    }),
    ...components.map(async (component) =>
      mkdir(dirname('tokens/components/' + component[0].replace('.', '/')), {
        recursive: true,
      })
    ),
  ]);

  const browser = await puppeteer.launch({ headless: 'new' });

  const baselineTable = async (
    file: string,
    name: string,
    url: string,
    id: string
  ) =>
    writeFile(
      file,
      await scrape(browser, name, url, id, (table) =>
        table
          .map((row, i) =>
            i == 0
              ? '"Token","Role","Value"'
              : [
                  row[1],
                  row[0],
                  row[2].replace(
                    /(\d+(?:.\d+)?),? (\d+(?:.\d+)?),? (\d+(?:.\d+)?),? (\d+(?:.\d+)?)/,
                    (_, a, b, c, d) => `${a},${b},${c},${d}`
                  ),
                ]
                  .map((cell) => (cell == '' ? '' : `"${cell}"`))
                  .join(',')
          )
          .join('\n')
      )
    );

  const capitaliseFirst = (s: string) => s[0].toUpperCase() + s.substring(1);
  const uniqByKeepFirst = <T, V>(a: T[], key: (i: T) => V) => {
    const seen = new Set<V>();
    return a.filter((item) => {
      const k = key(item);
      return seen.has(k) ? false : seen.add(k);
    });
  };

  await Promise.all([
    writeFile(
      'tokens/baseline/palette.csv',
      palettesToCSV(palettesFromSourceColor(0x7f67be))
    ),
    (async () =>
      writeFile(
        'tokens/baseline/theme.csv',
        await scrape(
          browser,
          'md.sys.color',
          'https://m3.material.io/styles/color/the-color-system/tokens',
          '7fd4440e-986d-443f-8b3a-4933bff16646',
          (table) =>
            table
              .map((row, i) =>
                i == 0
                  ? '"Token","Role","Value (light)","Value (dark)"'
                  : [
                      row[1].replace('inverse-on', 'on-inverse'),
                      row[0],
                      row[2],
                      row[3],
                    ]
                      .map((cell) => (cell == '' ? '' : `"${cell}"`))
                      .join(',')
              )
              .join('\n')
        )
      ))(),
    baselineTable(
      'tokens/baseline/elevation.csv',
      'md.sys.elevation',
      'https://m3.material.io/styles/elevation/tokens',
      '7efdeb8e-e2cb-4743-8a59-c7084881d34d'
    ),
    baselineTable(
      'tokens/baseline/motion.csv',
      'md.sys.motion',
      'https://m3.material.io/styles/motion/easing-and-duration/tokens-specs',
      '6341c2bf-54a0-4260-8ec7-6173926709a3'
    ),
    baselineTable(
      'tokens/baseline/shape.csv',
      'md.sys.shape',
      'https://m3.material.io/styles/shape/shape-scale-tokens',
      '6f668ba1-b671-4ea2-bcf3-c1cff4f4099e'
    ),
    (async () =>
      writeFile(
        'tokens/baseline/typography.csv',
        await scrape(
          browser,
          'md.sys.typography',
          'https://m3.material.io/styles/typography/type-scale-tokens',
          'd74b73c2-ac5d-43c5-93b3-088a2f67723d',
          (table) =>
            [
              ...table.map((row, i) =>
                i == 0
                  ? '"Token","Role","Value"'
                  : [
                      row[1],
                      row[0],
                      row[2] == '-'
                        ? row[3] +
                          (row[1].endsWith('size') ||
                          row[1].endsWith('line-height')
                            ? 'sp'
                            : row[1].endsWith('tracking')
                            ? 'px'
                            : '')
                        : row[2],
                    ]
                      .map((cell) => (cell == '' ? '' : `"${cell}"`))
                      .join(',')
              ),
              ...uniqByKeepFirst(
                table.filter((row, i) => i != 0 && row[2] != '-'),
                (i) => i[2]
              ).map((row) =>
                [
                  row[2],
                  capitaliseFirst(
                    row[2].split('.').at(-1)?.replace('-', ' ') ?? ''
                  ),
                  row[3] +
                    (row[1].endsWith('size') || row[1].endsWith('line-height')
                      ? 'sp'
                      : row[1].endsWith('tracking')
                      ? 'px'
                      : ''),
                ]
                  .map((cell) => (cell == '' ? '' : `"${cell}"`))
                  .join(',')
              ),
            ].join('\n')
        )
      ))(),
    writeFile(
      'tokens/baseline/state.csv',
      `"Token","Value"
"md.sys.state.dragged.state-layer.opacity","0.1599999964237213"
"md.sys.state.pressed.state-layer.opacity","0.11999999731779099"
"md.sys.state.focus.state-layer.opacity","0.11999999731779099"
"md.sys.state.hover.state-layer.opacity","0.07999999821186066"`
    ),
    ...components.map(async (component) =>
      writeFile(
        'tokens/components/' + component[0].replace('.', '/') + '.csv',
        component.length == 2
          ? await scrape(
              browser,
              component[0],
              ...(component[1].split('#') as [string, string])
            )
          : await scrape(
              browser,
              component[1],
              ...(component[2].split('#') as [string, string])
            )
      )
    ),
  ]);

  await browser.close();

  const recurse = async <T>(
    dir: string,
    op: (path: string) => T
  ): Promise<Awaited<T>[]> => {
    const dirents = await readdir(dir, { withFileTypes: true });
    return (
      await Promise.all(
        dirents.map((dirent) => {
          const res = resolve(dir, dirent.name);
          if (dirent.isDirectory()) return recurse(res, op);
          else return op(res);
        })
      )
    ).flat() as Awaited<T>[];
  };

  await writeFile(
    'tokens/tokens.css',
    (
      (
        await recurse('tokens', async (path) => {
          if (path.endsWith('.csv')) {
            const o = path.replace('.csv', '.css');
            writeFile(o, CSVToCSS(await readFile(path, { encoding: 'utf-8' })));
            return o;
          }
          return undefined;
        })
      ).filter((i) => Boolean(i)) as string[]
    )
      .map(
        (p) =>
          '@import url(' +
          p.replaceAll('\\', '/').replace(/.*tokens\//, '') +
          ');'
      )
      .join('\n')
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await generate();
