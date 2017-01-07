
import React, { Component } from 'react';
import { I18n } from 'react-i18nify';

class NoteForm extends Component {
    componentDidMount() {
        this._title.focus();
    }
    _onChange = (e) => {
        // e.target.value
        console.log(this);
    }
    render() {
        return (<div className="note-form">
            <form>
                <div className="form-group">
                    <label >{I18n.t('form.title')}</label>
                    <input ref={node => { this._title = node }}
                           onChange={this._onChange}
                           type="text"
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label>{I18n.t('form.description')}</label>
                    <textarea className="form-control" rows="5"/>
                </div>
                <div className="btn-row">
                    <button type="button" className="btn btn-default">{I18n.t('common.cancel')}</button>
                    <button type="button" className="btn btn-default">{I18n.t('common.create')}</button>
                </div>
            </form>
        </div>);
    }
}

export default NoteForm;
