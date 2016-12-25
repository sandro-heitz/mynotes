
// ES6 import
import React from 'react';
import { render } from 'react-dom';

// JSX und einfuegen am Mount-Point 'app'
render(
    <div>
        <h1>MyNotes</h1><p>Was Sie erledigt haben und was Sie noch erledigen müssen!</p><p>Grossartig - naja</p>
    </div>,
    document.getElementById('app')
)