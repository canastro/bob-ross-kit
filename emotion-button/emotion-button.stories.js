import React from 'react';
import { text, color, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { EmotionButton } from './emotion-button';
import theme from '../theme';

storiesOf('Emotion', module)
  .addWithJSX('basic', () => (
    <EmotionButton disabled={boolean('disabled', false)}>
      {text('text', 'Hello World')}
    </EmotionButton>
  ));
