/* eslint-disable @typescript-eslint/no-var-requires */
/* global require */

const { readFile, writeFile } = require('fs/promises');

/** @type {[string, ([string, string]|[string, string, string])[]][]} */
const classes = [
  [
    'Button',
    [
      ['.Button.Elevated', 'button/elevated', 'elevated'],
      ['.Button.Filled', 'button/filled', 'filled'],
      ['.Button.Tonal', 'button/tonal', 'tonal'],
      ['.Button.Outlined', 'button/outlined', 'outlined'],
      ['.Button.Text', 'button/text', 'text'],
    ],
  ],
  [
    'IconButton',
    [
      [
        ':is(.IconButton, .IconToggleButton).Filled',
        'icon-button/filled',
        'filled',
      ],
      [
        ':is(.IconButton, .IconToggleButton).Tonal',
        'icon-button/tonal',
        'tonal',
      ],
      [
        ':is(.IconButton, .IconToggleButton).Outlined',
        'icon-button/outlined',
        'outlined',
      ],
      [
        ':is(.IconButton, .IconToggleButton).Standard',
        'icon-button/standard',
        'standard',
      ],
    ],
  ],
  [
    'TextField',
    [
      ['.TextField.Filled', 'text-field/filled', 'filled'],
      ['.TextField.Filled', 'text-field/filled-error', 'filled'],
      ['.TextField.Outlined', 'text-field/outlined', 'outlined'],
      ['.TextField.Outlined', 'text-field/outlined-error', 'outlined'],
    ],
  ],
  ['Checkbox', [['.Checkbox', 'checkbox']]],
  ['Divider', [['.Divider', 'divider']]],
  ['PlainTooltip', [['.PlainTooltip', 'plain-tooltip']]],
  ['RadioButton', [['.RadioButton', 'radio-button']]],
  ['RichTooltip', [['.RichTooltip', 'rich-tooltip']]],
  ['Switch', [['.Switch', 'switch']]],
];

(async () =>
  await Promise.all([
    writeFile(
      './src/generated/generated.css',
      classes.map((x) => '@import url(' + x[0] + '.css);').join('\n')
    ),
    ...classes.map(async (x) =>
      writeFile(
        './src/generated/' + x[0] + '.css',
        (
          await Promise.all(
            x[1].map(
              async (y) =>
                '/* prettier-ignore */\n' +
                y[0] +
                ', ' +
                y[0] +
                ' * {' +
                (
                  await readFile(
                    './node_modules/design-tokens/tokens/components/' +
                      y[1] +
                      '.css',
                    {
                      encoding: 'utf-8',
                    }
                  )
                )
                  .replace(/^.*{/, '')
                  .replace(
                    /^ {2}(.*):.*$/gm,
                    (_, s) =>
                      '  ' +
                      s
                        .replace('md-comp-', '')
                        .replace('-' + y[2] ?? 'no remove', '') +
                      ': var(' +
                      s +
                      ');'
                  )
            )
          )
        ).join('\n')
      )
    ),
  ]))();
