import Color from './Color';
import './Table.css';
import { useEffect, useState } from 'react';

// export const span = (
//   data: Record<string, string>[]
// ): [string[], ([string, number] | null)[][]] => {
//   const keys = Object.keys(data[0]);
//   return [
//     keys,
//     data.reduce<([string, number] | null)[][]>((acc, row, i) => {
//       const incr = (y: number, x: number): number =>
//         //@ts-expect-error typescript fails to assert `acc[y][x] != null`
//         acc[y][x] != null ? acc[y][x][1]++ : incr(y - 1, x);
//       acc.push(
//         keys.map((key, j) =>
//           row[key] == '' ? (incr(i - 1, j), null) : [row[key], 1]
//         )
//       );
//       return acc;
//     }, []),
//   ];
// };

export default function Table({ data }: { data: Record<string, string>[] }) {
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    setKeys(Object.keys(data[0]));
  }, [data, setKeys]);

  return (
    <div className='Table'>
      <table>
        <thead>
          <tr>
            {keys.map((k, i) => (
              <th key={i}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((r, j) => (
            <tr id={r['Token']} key={j}>
              {keys.map((k, i) => (
                <td key={i}>
                  {!r[k] ? (
                    ''
                  ) : r[k].startsWith('#') ? (
                    <Color color={r[k]} />
                  ) : r[k].startsWith('md.sys.color') ? (
                    <Color
                      color={'var(--' + r[k].replace(/\./g, '-') + ')'}
                      text={r[k]}
                    />
                  ) : r[k].startsWith('md.ref.palette') ? (
                    <Color
                      color={'var(--' + r[k].replace(/\./g, '-') + ')'}
                      text={r[k]}
                    />
                  ) : (
                    r[k]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
