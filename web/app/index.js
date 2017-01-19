
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { initI18N } from './i18n/i18n';
import MyNotesApp from './components/MyNotesApp';

initI18N(window.location.href);

const rootEl = document.getElementById('app');

ReactDOM.render(
    <AppContainer><MyNotesApp /></AppContainer>,
    rootEl
)

if (module.hot) {
    console.log(module);

    module.hot.accept('./components/MyNotesApp', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./components/MyNotesApp').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}

