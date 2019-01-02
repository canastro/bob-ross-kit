const defaultFontFamily = "'PX Grotesk', sansSerif";

const createTypography = (palette: any, typography: any): any => {
  const {
    fontFamily = defaultFontFamily,

    /* sizes */
    fontSize = 14,
    htmlFontSize = 16,

    /* weights */
    fontWeightNormal = 400,
    fontWeightLight = 300,
    fontWeightBold = 700
  } = typography;

  const coef = fontSize / 14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  const output = {
    fontFamily,
    fontSizeH1: pxToRem(96),
    fontSizeH2: pxToRem(60),
    fontSizeH3: pxToRem(48),
    fontSizeH4: pxToRem(34),
    fontSizeH5: pxToRem(24),
    fontSizeH6: pxToRem(20),
    fontSizeButton: pxToRem(14),
    fontWeightNormal,
    fontWeightLight,
    fontWeightBold
  };

  return output;
};

export default createTypography;
