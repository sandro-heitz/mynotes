
import React, { Component } from 'react';

import NoteView from './NoteView.js';

class NotesList extends Component {
    render() {
        return (<div><NoteView /><NoteView/></div>);
    }
}

export default NotesList;

