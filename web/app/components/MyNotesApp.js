
import React, { Component } from 'react';
import HeaderPanel from './HeaderPanel.js';
import ImagePanel from './ImagePanel.js';
import NotesPanel from './notes/NotesPanel.js';

class MyNotesApp extends Component {

    render() {
        return (<div className="container-fluid main">
            <div className="row">
                <div className="hidden-xs col-sm-2">
                    <ImagePanel />
                </div>
                <div className="col-xs-12 col-sm-10">
                    <HeaderPanel />
                    <NotesPanel />
                </div>
            </div>
        </div>);
    }
}

export default MyNotesApp;
