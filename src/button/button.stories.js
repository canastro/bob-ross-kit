import React from 'react';
import { text, color, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { Button } from './button';

storiesOf('Button', module)
  .addWithJSX('with background', () => <Button bg="palegoldenrod">Hello world</Button>)
  .addWithJSX('with background 2', () => (
    <Button bg={color('bg', 'green')} disabled={boolean('disabled', false)}>
      {text('text', 'Hello World')}
    </Button>
  ));
