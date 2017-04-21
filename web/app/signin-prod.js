import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom'
import { initI18N } from './i18n/i18n';
import MySigninApp from './components/MySigninApp';
import { polyfill } from 'es6-promise';

polyfill();
initI18N(window.location.href);

ReactDOM.render(<MySigninApp />, document.getElementById('app'));