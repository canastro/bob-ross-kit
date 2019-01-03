import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import StyledButton from './styled-button';
import createTheme from '../theme';

storiesOf('StyledButton', module)
  .add('basic', () => (
    <StyledButton disabled={boolean('disabled', false)} onClick={() => {}}>
      {text('text', 'Hello World')}
    </StyledButton>
  ));
