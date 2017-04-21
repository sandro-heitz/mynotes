import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { initI18N } from './i18n/i18n';
import MySigninApp from './components/MySigninApp';
import { polyfill } from 'es6-promise';

polyfill();
initI18N(window.location.href);

const render = Component => {
    ReactDOM.render(<AppContainer>< Component /></AppContainer>, document.getElementById('app'));
}

render(MySigninApp);

if (module.hot) {
    module.hot.accept('./components/MySigninApp', () => render(MySigninApp));
}

