
import React, { Component } from 'react';

// AENDERUNG : style definition
const spanStyle = { paddingRight: '10px' };

class MyNotesApp extends Component {

    render() {
        return (<div>
            <h1>MyNotes</h1>
            {/* AENDERUNG : glyphicon und style attribute */}
            <p>
                <span className="glyphicon glyphicon-asterisk" aria-hidden="true" style={spanStyle}></span>
                Was Sie erledigt haben und was Sie noch erledigen müssen!
            </p>
            <p>Grossartig - naja ...</p>
        </div>);
    }
}

export default MyNotesApp;
