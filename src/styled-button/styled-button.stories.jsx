
import React from 'react';
import { text, color, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import StyledButton from './styled-button';
import theme from '../theme';

storiesOf('StyledButton', module)
  .addDecorator(renderStory => <ThemeProvider theme={theme}>{renderStory()}</ThemeProvider>)
  .add('basic', () => (
    <StyledButton disabled={boolean('disabled', false)}>
      {text('text', 'Hello World')}
    </StyledButton>
  ));