
import React, { Component } from 'react';

import NoteView from './NoteView.js';

class NotesList extends Component {
    render() {
        let ns =  this.props.notes.map(n => { return (<NoteView note={n} key={n.id} />) });
        return (<div className="notes-list">{ns}</div>);
    }
}

export default NotesList;

