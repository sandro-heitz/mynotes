
import React, { Component } from 'react';

import { I18n } from 'react-i18nify';

class NoteView extends Component {
    render() {
        let desc = this.props.note.description;
        desc = desc.split('\n').join('<br />');
        //
        return (<div className="note-view">
            <h4>{this.props.note.title}</h4>
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
