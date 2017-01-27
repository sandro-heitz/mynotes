
import React, { Component } from 'react';
import Velocity from 'velocity-animate';
import { I18n } from 'react-i18nify';

class NoteView extends Component {
    componentDidMount() {
        Velocity(this.refs.noteView,
            {  opacity: 1, backgroundColorGreen: 255, backgroundColorRed: 255, backgroundColorBlue: 255 },
            { duration: 1000  } );
    }
    componentWillUnmount() {
        Velocity(this.refs.noteView, "stop", true);
    }
    render() {
        let desc = this.props.note.description;
        desc = desc.split('\n').join('<br />');
        let style = { opacity: '0', backgroundColor: '#FF8533'};
        //
        return (<div className="note-view" ref="noteView" style={style}>
            <h3>{this.props.note.title}</h3>
            <div className="row">
                <div className="hidden-xs col-sm-4">
                    {I18n.t('form.description')}
                </div>
                <div className="col-xs-12 col-sm-8">
                    <p dangerouslySetInnerHTML={{__html: desc}}></p>
                </div>
            </div>
        </div>);
    }
}

export default NoteView;
