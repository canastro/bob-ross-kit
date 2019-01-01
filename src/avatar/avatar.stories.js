import React from 'react';
import { text, color, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Avatar from './avatar';
import theme from '../theme';

storiesOf('Avatar', module)
  .addDecorator(renderStory => <ThemeProvider theme={theme}>{renderStory()}</ThemeProvider>)
  .addWithJSX('basic', () => (
    <Avatar char="T" />
  ));
