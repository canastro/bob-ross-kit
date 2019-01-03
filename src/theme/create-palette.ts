export type Palette = {
  white: string;
  grey: string;
  black: string;
  primary: string;
  secondary: string;
};

const createPalette = (palette: any): Palette => {
  const {
    white = '#fff',
    grey = '#f7f9fa',
    black = '#222',
    primary = '#6d30e7',
    secondary = '#dfdded'
  } = palette;

  const output = {
    white,
    grey,
    black,
    primary,
    secondary
  };

  return output;
};

export default createPalette;
