
import React, { Component } from 'react';

class NoteView extends Component {
    render() {
        return (<div className="note-view">
            <h3>{this.props.note.title}</h3>
            <p>{this.props.note.description}</p>
        </div>);
    }
}

export default NoteView;
