import React, { PureComponent } from 'react';
import styled from 'styled-components';
import theme from '../theme';

export const enum THEMES {
  PRIMARY = '__primary__',
  SECONDARY = '__secondary__',
  WHITE = '__white__'
}

export const enum SIZES {
  SMALL = '__small__',
  NORMAL = '__normal__',
  BIG = '__big__'
}

const SIZES_MAP = {
  [SIZES.SMALL]: { root: 30, icon: 26, labelTop: 0 },
  [SIZES.NORMAL]: { root: 40, icon: 0, labelTop: 1 },
  [SIZES.BIG]: { root: 80, icon: 76, labelTop: 0 }
};

const THEME_MAP = {
  [THEMES.PRIMARY]: {
    color: theme.palette.secondaryColor,
    backgroundColor: theme.palette.lightMint,
    borderColor: 'transparent'
  },
  [THEMES.SECONDARY]: {
    color: theme.palette.white,
    backgroundColor: theme.palette.bilobaFlower,
    borderColor: 'transparent'
  },
  [THEMES.WHITE]: {
    color: theme.palette.paleGrey,
    backgroundColor: theme.palette.white,
    borderColor: theme.palette.mystic
  }
};

type AvatarProps = {
  char: string;
  icon: React.ReactNode;
  size: SIZES;
  theme: THEMES;
};

type StyledRootProp = {
  size: number;
  avatarColors: any;
};

const StyledRoot = styled.div<StyledRootProp>`
  display: inline-flex;
  height: ${props => props.size};
  width: ${props => props.size};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${props => props.theme.typography.fontSizeTitleSmall};
  font-weight: bold;
  letter-spacing: 0.2px;
  border: 1px solid ${props => props.avatarColors.borderColor};
  border-radius: 50%;
  background: ${props => props.avatarColors.backgroundColor};
  color: ${props => props.avatarColors.color};
  text-transform: uppercase;
  user-select: none;
`;

type StyledLabelProp = {
  labelTop: number;
};

const StyledLabel = styled.span<StyledLabelProp>`
  position: relative;
  top: ${props => props.labelTop};
`;

type StyledImageProp = {
  size: number;
};

const StyledImage = styled.img<StyledImageProp>`
  width: ${props => props.size};
  height: ${props => props.size};
  pointer-events: none;
`;

class Avatar extends PureComponent<AvatarProps> {
  static defaultProps = {
    char: null,
    icon: null,
    size: SIZES.BIG,
    theme: THEMES.PRIMARY
  };

  /**
   * Render content as simple text (label with one character only)
   * @returns {JSX.Element}
   */
  renderCharacter(config: any) {
    return <StyledLabel labelTop={config.labelTop}>{this.props.char}</StyledLabel>;
  }

  /**
   * Render content as svg icon
   * @returns {JSX.Element}
   */
  renderIcon(config: any) {
    const { icon } = this.props;

    // icon is already an renderable component
    if (typeof icon !== 'string') {
      return icon;
    }

    return <StyledImage size={config.icon} src={icon} />;
  }

  /**
   * Render component
   * @returns {JSX.Element}
   */
  render() {
    const { char, size, theme } = this.props;
    const config = SIZES_MAP[size];
    const avatarColors = THEME_MAP[theme]
    const content = char ? this.renderCharacter(config) : this.renderIcon(config);

    return <StyledRoot size={config.root} avatarColors={avatarColors}>{content}</StyledRoot>;
  }
}

export default Avatar;
