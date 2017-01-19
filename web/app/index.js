
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { initI18N } from './i18n/i18n';
import MyNotesApp from './components/MyNotesApp';

initI18N(window.location.href);

render(
    <MyNotesApp />,
    document.getElementById('app')
)
