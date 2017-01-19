
import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';

class NotesPanel extends Component {
    constructor() {
        super();
        let notes = [];
        let id = 0;
        this.state = { notes };
        this.priv = { id };
    }
    addNote = (n) => {
        this.priv.id++;
        n.id = this.priv.id;
        let notes = [n, ...this.state.notes];
        this.setState({ notes });
    }
    render() {
        return (<div>
            <NoteForm addNote={this.addNote} />
            <NotesList notes={this.state.notes} />
        </div>);
    }
}

export default NotesPanel;

