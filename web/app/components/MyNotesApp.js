
import React, { Component } from 'react';

import { I18n } from 'react-i18nify';

import image from '../images/files/mynotes.png';

const spanStyle = { paddingRight: '10px' };

class MyNotesApp extends Component {

    render() {
        return (<div className="container-fluid main">
            <div className="row">
                <div className="col-xs-12 col-sm-2"><h1><img src={image}></img></h1></div>
                <div className="col-xs-12 col-sm-10">
                    <h1>{I18n.t('title')}</h1>
                    <p>
                        <span className="glyphicon glyphicon-asterisk" aria-hidden="true" style={spanStyle}></span>
                        {I18n.t('info')}
                    </p>
                    <p>{I18n.t('great')}</p>
                </div>
            </div>
        </div>);
    }
}

export default MyNotesApp;
