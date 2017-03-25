
import React, { Component } from 'react';

import NoteView from './NoteView';

class NotesList extends Component {
    render() {
        let nr = 0;
        let ns =  this.props.notes.map(n => { nr++; return (<NoteView number={nr} note={n} key={n.id} />) });
        return (<div className="notes-list">{ns}</div>);
    }
}

export default NotesList;

