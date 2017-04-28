
import React, { Component } from 'react';
import HeaderPanel from './HeaderPanel';
import ImagePanel from './ImagePanel';
import NotesPanel from './notes/NotesPanel';
import { initI18N } from '../i18n/i18n';

const MyNotesApp = (props) => {

    initI18N(props.xhref);

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

export default MyNotesApp;
