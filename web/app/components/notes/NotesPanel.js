
import React, { Component } from 'react';
import NoteForm from './NoteForm.js';
import NotesList from './NotesList.js';

const notes = [
    { title: 'Titeln eins', description: 'Beschreibung eins ...', id: 1 },
    { title: 'Titeln zwei', description: 'Beschreibung zwei ...', id: 2}
];

class NotesPanel extends Component {
    render() {
        return (<div>
            <NoteForm />
            <NotesList notes={notes} />
        </div>);
    }
}

export default NotesPanel;

