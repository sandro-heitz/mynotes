
import React, { Component } from 'react';
import NoteForm from './NoteForm.js';
import NotesList from './NotesList.js';

class NotesPanel extends Component {
    render() {
        return (<div>
            <NoteForm />
            <NotesList />
        </div>);
    }
}

export default NotesPanel;

