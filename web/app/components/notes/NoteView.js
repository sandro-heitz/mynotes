
import React, { Component } from 'react';

class NoteView extends Component {
    render() {
        let desc = this.props.note.description;
        desc = desc.split('\n').join('<br />');
        //
        return (<div className="note-view">
            <h3>{this.props.note.title}</h3>
            <p dangerouslySetInnerHTML={{__html: desc}}></p>
        </div>);
    }
}

export default NoteView;
