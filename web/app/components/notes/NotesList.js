
import React, { Component } from 'react';

import NoteView from './NoteView.js';

class NotesList extends Component {
    render() {
        return (<div className="notes-list"><NoteView /><NoteView/></div>);
    }
}

export default NotesList;

