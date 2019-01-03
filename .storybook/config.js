import React from 'react';
import { addDecorator, configure, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { ThemeProvider } from 'styled-components';

import createTheme from '../src/theme';

addDecorator(renderStory => <ThemeProvider theme={createTheme()}>{renderStory()}</ThemeProvider>);
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
