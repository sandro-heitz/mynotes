
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import mainStyles from './css/main.css';

import React from 'react';
import { render } from 'react-dom';

// AENDERUNG i18n
import { initI18N } from './i18n/i18n.js';

import MyNotesApp from './components/MyNotesApp.js';

// AENDERUNG i18n initialisieren
initI18N();

render(
    <MyNotesApp />,
    document.getElementById('app')
)
