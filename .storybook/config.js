import { addDecorator, configure, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { ThemeProvider } from 'styled-components';

addDecorator(
  withInfo({
    header: true,
    inline: true,
    propTablesExclude: [ThemeProvider] // do not display propTable for HOC
  })
);
addDecorator(withKnobs);

const req = require.context('../src', true, /.stories.jsx$/);

function loadStories() {
  require('./welcome-story');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
