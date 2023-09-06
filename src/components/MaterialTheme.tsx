import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import './MaterialTheme.css';

import {
  palettesFromSourceColor,
  palettesFromImage,
  hexFromArgb,
  Palettes,
} from 'design-color';

export type MaterialThemeProps = PropsWithChildren<{
  sourceColor?: number;
  sourceImage?: HTMLImageElement;
  style?: React.CSSProperties;
}>;

const CSS = {
  convertPropertyName: (name: string) =>
    name
      .split(/(?=[A-Z])/)
      .join('-')
      .toLowerCase(),
  stringify: (styles: CSSProperties) =>
    (Object.keys(styles) as (keyof CSSProperties)[]).reduce(
      (acc, key) => acc + `${CSS.convertPropertyName(key)}:${styles[key]};`,
      ''
    ),
} as const;

/**
 * Primary UI component for user interaction
 */
export const MaterialTheme = ({
  sourceColor,
  sourceImage,
  style,
  children,
}: MaterialThemeProps) => {
  const [palettes, setPalettes] = useState<Palettes>();
  useEffect(() => {
    if (sourceImage) palettesFromImage(sourceImage).then(setPalettes);
    else if (sourceColor) setPalettes(palettesFromSourceColor(sourceColor));
    else setPalettes(undefined);
  }, [sourceColor, sourceImage]);

  const [props, setProps] = useState<CSSProperties>({});
  useEffect(() => {
    if (palettes) {
      const o: Record<`--${string}`, string> = {};
      const tones = [
        0, 4, 6, 10, 12, 17, 20, 22, 24, 30, 40, 50, 60, 80, 87, 90, 92, 95, 96,
        98, 100,
      ];
      for (const [key, palette] of Object.entries(palettes)) {
        const paletteKey = key
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .toLowerCase();
        for (const tone of tones)
          o[`--md-ref-palette-${paletteKey}${tone}`] =
            hexFromArgb(palette.tone(tone)) + ' !important';
      }
      setProps(o);
    } else {
      setProps({});
    }
  }, [palettes]);

  return (
    <div className='MaterialTheme' style={{ ...style }}>
      <style
        dangerouslySetInnerHTML={{
          __html: '*,::backdrop{' + CSS.stringify(props) + '}',
        }}></style>
      {children}
    </div>
  );
};
