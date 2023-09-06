export * from '@material/material-color-utilities';
import {
  CorePalette,
  TonalPalette,
  sourceColorFromImage,
} from '@material/material-color-utilities';

export type Palettes = Record<
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'neutral'
  | 'neutral-variant'
  | 'error',
  TonalPalette
>;

export function palettesFromSourceColor(source: number): Palettes {
  const palette = CorePalette.of(source);
  return {
    primary: palette.a1,
    secondary: palette.a2,
    tertiary: palette.a3,
    neutral: palette.n1,
    'neutral-variant': palette.n2,
    error: palette.error,
  };
}

export async function palettesFromImage(image: HTMLImageElement) {
  return palettesFromSourceColor(await sourceColorFromImage(image));
}
