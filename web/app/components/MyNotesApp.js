
import React, { Component } from 'react';

const spanStyle = { paddingRight: '10px' };

// AENDERUNG : import des bildes
const image = require('../images/inline/mynotes.png');

class MyNotesApp extends Component {

    render() {
        // AENDERUNG :: bootstrap container und columns
        // AENDERUNG :: class main
        return (<div className="container-fluid main">
            <div className="row">
                <div className="col-xs-12 col-sm-2"><h1>{/* AENDERUNG : das Bild */}<img src={image}></img></h1></div>
                <div className="col-xs-12 col-sm-10">
                    <h1>MyNotes</h1>
                    {/* AENDERUNG : glyphicon und style attribute */}
                    <p>
                        <span className="glyphicon glyphicon-asterisk" aria-hidden="true" style={spanStyle}></span>
                        Was Sie erledigt haben und was Sie noch erledigen müssen!
                    </p>
                    <p>Grossartig - naja</p>
                </div>
            </div>
        </div>);
    }
}

export default MyNotesApp;
