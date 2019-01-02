import createPalette from './create-palette';
import createTypography from './create-typography';
import zIndex from './z-index';
import spacing from './spacing';

const createTheme = (options: any = {}): any => {
  const {
    palette: paletteInput = {},
    typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput)
  const typography = createTypography(palette, typographyInput);

  return {
    palette,
    spacing,
    typography,
    zIndex
  };
};

export default createTheme;
