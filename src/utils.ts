export const cls = (
  strings: TemplateStringsArray,
  ...inserts: (string | Record<string, boolean>)[]
): string =>
  inserts
    .map(
      (insert, i) =>
        strings[i] +
        (typeof insert == 'string'
          ? insert
          : Object.keys(insert)
              .map((j) => (insert[j] ? j : ''))
              .join(' '))
    )
    .join('') + strings.at(-1);
