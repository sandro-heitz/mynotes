import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom'
import { initI18N } from './i18n/i18n';
import MyNotesWrapper from './MyNotesWrapper';
import { polyfill } from 'es6-promise';

polyfill();

ReactDOM.render(<MyNotesWrapper xhref={window.location.href}/>, document.getElementById('app'));