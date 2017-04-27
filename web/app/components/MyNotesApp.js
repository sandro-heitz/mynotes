
import React, { Component } from 'react';
import HeaderPanel from './HeaderPanel';
import ImagePanel from './ImagePanel';
import NotesPanel from './notes/NotesPanel';
import { initI18N } from '../i18n/i18n';

class MyNotesApp extends Component {
    constructor(props) {
        super(props);
        console.log('xhref: ' + this.props.xhref);
        initI18N(this.props.xhref);
    }

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
