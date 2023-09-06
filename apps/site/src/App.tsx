// import { useImmer } from 'use-immer';
// import './App.css';
// import Token from './Token';
// import Color from './Color';
// import { Icon, IconButtonType, IconToggleButton } from 'material3-react';
// import { useEffect, useState } from 'react';
// import Dp from './Dp';
// import Percentage from './Percentage';

// export type Token = { type: 'sys' | 'ref' | 'comp'; attribute: string };
// export type Value = {
//   type: 'color' | 'dp' | '%' | 'token';
//   value: string;
// };
// export type DesignToken = {
//   token: Token;
//   value: Value;
// };

// function Row({
//   token,
//   onChange,
// }: {
//   token: DesignToken;
//   onChange: (value: string) => void;
// }) {
//   const [editing, setEditing] = useState(false);
//   const [value, setValue] = useState(token.value.value);

//   useEffect(() => {
//     setValue(token.value.value);
//   }, [token]);

//   useEffect(() => {
//     if (!editing) onChange(value);
//   }, [editing, onChange, value]);

//   return (
//     <tr>
//       <td>
//         <Token token={token.token} />
//       </td>
//       <td className={editing ? 'editing' : ''}>
//         <div className='value'>
//           {token.value.type == 'color' ? (
//             <Color
//               color={value}
//               onChange={(v) => setValue(v)}
//               readOnly={!editing}
//             />
//           ) : token.value.type == 'dp' ? (
//             <Dp
//               value={value}
//               onChange={(v) => setValue(v)}
//               readOnly={!editing}
//             />
//           ) : token.value.type == '%' ? (
//             <Percentage
//               value={value}
//               onChange={(v) => setValue(v)}
//               readOnly={!editing}
//             />
//           ) : null}

//           <IconToggleButton
//             type={IconButtonType.Tonal}
//             selected={editing}
//             onClick={() => setEditing(!editing)}>
//             <Icon icon='edit' filled={editing} />
//           </IconToggleButton>
//         </div>
//       </td>
//     </tr>
//   );
// }

// function File() {
//#region
// const [tokens, updateTokens] = useImmer<DesignToken[]>([
//   {
//     token: { type: 'ref', attribute: 'palette-primary0' },
//     value: { type: 'color', value: '#000000' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary4' },
//     value: { type: 'color', value: '#13003a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary6' },
//     value: { type: 'color', value: '#190047' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary10' },
//     value: { type: 'color', value: '#22005c' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary12' },
//     value: { type: 'color', value: '#270562' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary17' },
//     value: { type: 'color', value: '#31156c' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary20' },
//     value: { type: 'color', value: '#381e73' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary22' },
//     value: { type: 'color', value: '#3c2378' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary24' },
//     value: { type: 'color', value: '#41287c' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary30' },
//     value: { type: 'color', value: '#4f378b' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary40' },
//     value: { type: 'color', value: '#674fa5' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary50' },
//     value: { type: 'color', value: '#8168c0' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary80' },
//     value: { type: 'color', value: '#cfbcff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary87' },
//     value: { type: 'color', value: '#e1d3ff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary90' },
//     value: { type: 'color', value: '#e9ddff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary92' },
//     value: { type: 'color', value: '#eee4ff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary95' },
//     value: { type: 'color', value: '#f6eeff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary96' },
//     value: { type: 'color', value: '#f8f1ff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary98' },
//     value: { type: 'color', value: '#fdf7ff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary100' },
//     value: { type: 'color', value: '#ffffff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary0' },
//     value: { type: 'color', value: '#000000' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary4' },
//     value: { type: 'color', value: '#100b1d' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary6' },
//     value: { type: 'color', value: '#151022' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary10' },
//     value: { type: 'color', value: '#1e192b' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary12' },
//     value: { type: 'color', value: '#221d2f' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary17' },
//     value: { type: 'color', value: '#2c273a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary20' },
//     value: { type: 'color', value: '#332d41' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary22' },
//     value: { type: 'color', value: '#373245' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary24' },
//     value: { type: 'color', value: '#3c364a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary30' },
//     value: { type: 'color', value: '#4a4458' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary40' },
//     value: { type: 'color', value: '#625b71' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary50' },
//     value: { type: 'color', value: '#7b748a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary80' },
//     value: { type: 'color', value: '#ccc2db' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary87' },
//     value: { type: 'color', value: '#dfd6ef' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary90' },
//     value: { type: 'color', value: '#e8def8' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary92' },
//     value: { type: 'color', value: '#eee4fe' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary95' },
//     value: { type: 'color', value: '#f6eeff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary96' },
//     value: { type: 'color', value: '#f8f1ff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary98' },
//     value: { type: 'color', value: '#fdf7ff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary100' },
//     value: { type: 'color', value: '#ffffff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary0' },
//     value: { type: 'color', value: '#000000' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary4' },
//     value: { type: 'color', value: '#21040f' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary6' },
//     value: { type: 'color', value: '#270815' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary10' },
//     value: { type: 'color', value: '#31101d' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary12' },
//     value: { type: 'color', value: '#361421' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary17' },
//     value: { type: 'color', value: '#421f2b' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary20' },
//     value: { type: 'color', value: '#4a2532' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary22' },
//     value: { type: 'color', value: '#4f2936' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary24' },
//     value: { type: 'color', value: '#542e3b' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary30' },
//     value: { type: 'color', value: '#633b48' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary40' },
//     value: { type: 'color', value: '#7e5260' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary50' },
//     value: { type: 'color', value: '#996a78' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary80' },
//     value: { type: 'color', value: '#efb8c8' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary87' },
//     value: { type: 'color', value: '#ffcddb' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary90' },
//     value: { type: 'color', value: '#ffd9e3' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary92' },
//     value: { type: 'color', value: '#ffe1e8' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary95' },
//     value: { type: 'color', value: '#ffecf0' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary96' },
//     value: { type: 'color', value: '#fff0f2' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary98' },
//     value: { type: 'color', value: '#fff8f8' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary100' },
//     value: { type: 'color', value: '#ffffff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral0' },
//     value: { type: 'color', value: '#000000' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral4' },
//     value: { type: 'color', value: '#0f0e11' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral6' },
//     value: { type: 'color', value: '#141316' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral10' },
//     value: { type: 'color', value: '#1c1b1e' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral12' },
//     value: { type: 'color', value: '#201f22' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral17' },
//     value: { type: 'color', value: '#2b292d' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral20' },
//     value: { type: 'color', value: '#313033' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral22' },
//     value: { type: 'color', value: '#363438' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral24' },
//     value: { type: 'color', value: '#3a383c' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral30' },
//     value: { type: 'color', value: '#48464a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral40' },
//     value: { type: 'color', value: '#605d62' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral50' },
//     value: { type: 'color', value: '#79767a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral80' },
//     value: { type: 'color', value: '#cac5ca' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral87' },
//     value: { type: 'color', value: '#ddd8dd' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral90' },
//     value: { type: 'color', value: '#e6e1e6' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral92' },
//     value: { type: 'color', value: '#ece7eb' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral95' },
//     value: { type: 'color', value: '#f4eff4' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral96' },
//     value: { type: 'color', value: '#f7f2f7' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral98' },
//     value: { type: 'color', value: '#fdf8fd' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral100' },
//     value: { type: 'color', value: '#ffffff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant0' },
//     value: { type: 'color', value: '#000000' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant4' },
//     value: { type: 'color', value: '#0f0d14' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant6' },
//     value: { type: 'color', value: '#14121a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant10' },
//     value: { type: 'color', value: '#1d1a22' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant12' },
//     value: { type: 'color', value: '#211e26' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant17' },
//     value: { type: 'color', value: '#2b2931' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant20' },
//     value: { type: 'color', value: '#322f37' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant22' },
//     value: { type: 'color', value: '#36333c' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant24' },
//     value: { type: 'color', value: '#3b3840' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant30' },
//     value: { type: 'color', value: '#49454e' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant40' },
//     value: { type: 'color', value: '#615d66' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant50' },
//     value: { type: 'color', value: '#7a757f' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant80' },
//     value: { type: 'color', value: '#cac4cf' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant87' },
//     value: { type: 'color', value: '#ded8e3' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant90' },
//     value: { type: 'color', value: '#e7e0eb' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant92' },
//     value: { type: 'color', value: '#ece6f1' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant95' },
//     value: { type: 'color', value: '#f5eefa' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant96' },
//     value: { type: 'color', value: '#f8f1fd' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant98' },
//     value: { type: 'color', value: '#fdf7ff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant100' },
//     value: { type: 'color', value: '#ffffff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error0' },
//     value: { type: 'color', value: '#000000' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error4' },
//     value: { type: 'color', value: '#280001' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error6' },
//     value: { type: 'color', value: '#310001' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error10' },
//     value: { type: 'color', value: '#410002' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error12' },
//     value: { type: 'color', value: '#490002' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error17' },
//     value: { type: 'color', value: '#5c0004' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error20' },
//     value: { type: 'color', value: '#690005' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error22' },
//     value: { type: 'color', value: '#710005' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error24' },
//     value: { type: 'color', value: '#790006' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error30' },
//     value: { type: 'color', value: '#93000a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error40' },
//     value: { type: 'color', value: '#ba1a1a' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error50' },
//     value: { type: 'color', value: '#de3730' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error80' },
//     value: { type: 'color', value: '#ffb4ab' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error87' },
//     value: { type: 'color', value: '#ffcfc9' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error90' },
//     value: { type: 'color', value: '#ffdad6' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error92' },
//     value: { type: 'color', value: '#ffe2de' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error95' },
//     value: { type: 'color', value: '#ffedea' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error96' },
//     value: { type: 'color', value: '#fff0ee' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error98' },
//     value: { type: 'color', value: '#fff8f7' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error100' },
//     value: { type: 'color', value: '#ffffff' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-primary60' },
//     value: { type: 'color', value: '#9b82dc' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-secondary60' },
//     value: { type: 'color', value: '#958da4' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-tertiary60' },
//     value: { type: 'color', value: '#b58392' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral60' },
//     value: { type: 'color', value: '#938f94' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-neutral-variant60' },
//     value: { type: 'color', value: '#948f99' },
//   },
//   {
//     token: { type: 'ref', attribute: 'palette-error60' },
//     value: { type: 'color', value: '#ff5449' },
//   },
// ]);
//#endregion

//   const [tokens, updateTokens] = useImmer<DesignToken[]>([
//     {
//       token: { type: 'sys', attribute: 'shape-corner-full' },
//       value: { type: '%', value: '50' },
//     },
//     {
//       token: { type: 'sys', attribute: 'shape-corner-extra-large' },
//       value: { type: 'dp', value: '28' },
//     },
//     {
//       token: { type: 'sys', attribute: 'shape-corner-large' },
//       value: { type: 'dp', value: '16' },
//     },
//     {
//       token: { type: 'sys', attribute: 'shape-corner-medium' },
//       value: { type: 'dp', value: '12' },
//     },
//     {
//       token: { type: 'sys', attribute: 'shape-corner-small' },
//       value: { type: 'dp', value: '8' },
//     },
//     {
//       token: { type: 'sys', attribute: 'shape-corner-extra-small' },
//       value: { type: 'dp', value: '4' },
//     },
//     {
//       token: { type: 'sys', attribute: 'shape-corner-none' },
//       value: { type: 'dp', value: '0' },
//     },
//   ]);

//   return (
//     <div className='App table-wrapper'>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               <div className='heading'>
//                 <Icon icon='token' />
//                 Token
//               </div>
//             </th>
//             <th>
//               <div className='heading'>
//                 <Icon icon='tag' />
//                 Value
//               </div>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {tokens.map((token, i) => (
//             <Row
//               onChange={(value) =>
//                 updateTokens((draft) => {
//                   draft[i].value.value = value;
//                 })
//               }
//               token={token}
//               key={i}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { type FC } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  type LoaderFunction,
  type ActionFunction,
} from 'react-router-dom';

const pages = import.meta.glob<{
  default: FC;
  loader?: LoaderFunction;
  action?: ActionFunction;
}>('./pages/**/*.tsx', { eager: true });

const routes: {
  path: string;
  Element: FC;
  loader?: LoaderFunction;
  action?: ActionFunction;
}[] = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/(Overview|Home)/, '');

  routes.push({
    path:
      fileName === 'Overview' || fileName === 'Home'
        ? '/'
        : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ...rest }) => ({
    ...rest,
    element: <Element />,
    ErrorBoundary: () => <>woah</>,
  }))
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
