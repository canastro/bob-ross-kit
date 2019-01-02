import { addDecorator, configure, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator(withInfo({ header: true, inline: true }));
addDecorator(withKnobs);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcome-story');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
