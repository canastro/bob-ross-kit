const typography = {
  /**
   * GRAYSCALE
   */
  white: '#fff',
  lightGrey: '#f7f9fa',
  paleGrey: '#f1f5f7',
  solitude: '#e9eff2',
  silver: '#e4e7ec',
  silverSand: '#c3c8cf',
  coolGrey: '#989da6',
  battleshipGrey: '#72777b',
  darkGrey: '#4c5156',
  black: '#222',

  /**
   * PRIMARY
   */
  purple: '#6d30e7',
  purpleHover: '#5e14d1',
  purpleActive: 'var(cobalt)',
  mint: '#4fd5b3',
  mintHover: '#4bcbaa',
  mintActive: '#46c3a3',

  /**
   * SECONDARY
   */
  cobalt: '#251e84',
  violet: '#5514d1',
  lavender: '#dfdded',
  purpleGray: '#f0eff5',
  lightMint: '#c2ecdf',

  /**
   * SOLID COLOR (from formulas and cell selections)
   */
  curiousBlue: '#2e84d2',
  bittersweet: '#ff7474',
  mountainMeadow: '#0fc37b',
  heliotrope: '#a264ff',
  maroonFlush: '#d01c55',
  aqua: '#0cf',
  pizazz: '#fd9000',
  blue: '#1100fd',
  deepSea: '#008761', /* string arguments */

  /**
   * NOT IN STYLEGUIDE! (@TODO must check with mariana)
   */
  bilobaFlower: '#c2b9ed', /* from avatares */
  mystic: '#e9ecf2',

  /**
   * DIMMED COLORS (from cell ranges/selections)
   */
  curiousBlueTransparent: 'rgba(46, 132, 210, 0.15)',
  bittersweetTransparent: 'rgba(255, 116, 116, 0.15)',
  mountainMeadowTransparent: 'rgba(15, 195, 123, 0.15)',
  heliotropeTransparent: 'rgba(162, 100, 255, 0.15)',
  maroonFlushTransparent: 'rgba(208, 28, 85, 0.15)',
  aquaTransparent: 'rgba(0, 204, 255, 0.15)',
  pizazzTransparent: 'rgba(253, 144, 0, 0.15)',
  blueTransparent: 'rgba(17, 0, 253, 0.15)',

  /**
   * ERRORS AND WARNINGS
   */
  errorRed: '#f7323f', /* or #E54647 from the SVGs? */
  successGreen: '#27a083',
  warningYellow: '#fec701', /* created by the dev */
  infoBlue: '#5d9efa',

  /**
   * WITH ALPHA
   */
  transparentBlack: 'rgba(34, 34, 34, 0.13)',
  transparentPurple: 'rgba(108, 56, 241, 0.1)',
  transparentMint: 'rgba(113, 203, 167, 0.1)',
  transparentSilver: 'rgba(200, 200, 200, 0.1)',
  selectionYellow: '#f9ecba',
  illustrationGray: 'rgba(250, 250, 250, 0.98)',

  /**
   * ALIASES
   */
  primaryColor: 'var(purple)',
  primaryColorHover: 'var(purpleHover)',
  primaryColorActive: 'var(purpleActive)',
  primaryColorDisabled: 'var(purpleGray)',
  primaryColorTransparent: 'var(transparentPurple)',

  secondaryColor: 'var(mint)',
  secondaryColorHover: 'var(mintHover)',
  secondaryColorActive: 'var(mintActive)',
  secondaryColorTransparent: 'var(transparentMint)',
};

export default typography;