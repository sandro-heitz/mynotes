
import React from 'react';
import { render } from 'react-dom';

// Unsere Komponente
import MyNotesApp from './components/MyNotesApp.js';

// Die Komponente anwenden
render(
    <MyNotesApp />,
    document.getElementById('app')
)

