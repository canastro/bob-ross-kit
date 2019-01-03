import createPalette, { Palette } from './create-palette';
import createTypography, { Typography } from './create-typography';
import zIndex, { ZIndex } from './z-index';
import spacing, { Spacing } from './spacing';

export type Theme = {
  palette: Palette,
  typography: Typography,
  spacing: Spacing,
  zIndex: ZIndex
};

const createTheme = (options: any = {}): Theme => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {}
  } = options;

  const palette = createPalette(paletteInput)
  const typography = createTypography(typographyInput);

  return {
    palette,
    spacing,
    typography,
    zIndex
  };
};

export default createTheme;
