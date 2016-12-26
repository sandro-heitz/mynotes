
// AENDERUNG (bootstrap)
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
// AENDERUNG (unsere css datei)
import mainStyles from './css/main.css';

import React from 'react';
import { render } from 'react-dom';

import MyNotesApp from './components/MyNotesApp.js';

render(
    <MyNotesApp />,
    document.getElementById('app')
)
