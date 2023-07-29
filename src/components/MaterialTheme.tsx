import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import './MaterialTheme.css';

import {
  themeFromSourceColor,
  themeFromImage,
  Theme,
  hexFromArgb,
} from '@material/material-color-utilities';

export type MaterialThemeProps = PropsWithChildren<{
  sourceColor?: number;
  sourceImage?: HTMLImageElement;
  style?: React.CSSProperties;
}>;

/**
 * Primary UI component for user interaction
 */
export const MaterialTheme = ({
  sourceColor,
  sourceImage,
  style,
  children,
}: MaterialThemeProps) => {
  const [theme, setTheme] = useState<Theme>();
  useEffect(() => {
    if (sourceImage) themeFromImage(sourceImage).then(setTheme);
    else if (sourceColor) setTheme(themeFromSourceColor(sourceColor));
    else setTheme(undefined);
  }, [sourceColor, sourceImage]);

  const [props, setProps] = useState<CSSProperties>({});
  useEffect(() => {
    if (theme) {
      const o: Record<`--${string}`, string> = {};
      const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];
      for (const [key, palette] of Object.entries(theme.palettes)) {
        const paletteKey = key
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .toLowerCase();
        for (const tone of tones)
          o[`--md-ref-palette-${paletteKey}${tone}`] = hexFromArgb(
            palette.tone(tone)
          );
      }
      setProps(o);
    } else {
      setProps({});
    }
  }, [theme]);

  return (
    <div className='MaterialTheme' style={{ ...props, ...style }}>
      {children}
    </div>
  );
};
