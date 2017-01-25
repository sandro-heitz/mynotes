
import React, { Component } from 'react';
import { I18n } from 'react-i18nify';

const INITIAL_STATE = {ok: false, changed: false };

class NoteForm extends Component {
    constructor() {
        super();
        this.state = INITIAL_STATE;
    }
    componentDidMount() {
        this._focus();
    }
    _onChange = (e) => {
        e.preventDefault();
        let ok = this._title.value && this._description.value
            && this._title.value.trim() && this._description.value.trim();
        let changed = this._title.value || this._description.value;
        this.setState({ok: ok, changed: changed});
    }
    _handleCancel = (e) => {
        e.preventDefault();
        this._reset();
        this._focus();
    }
    _handleOk = (e) => {
        e.preventDefault();
        let note = { title: this._title.value, description: this._description.value, created: true };
        this._reset();
        this._focus();
        this.props.addNote(note);
    }
    _reset() {
        this._title.value = '';
        this._description.value = '';
        this.state = INITIAL_STATE;
        this.forceUpdate();
    }
    _focus() {
        this._title.focus();
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
                    <textarea ref={node => { this._description = node}}
                              onChange={this._onChange}
                              className="form-control"
                              rows="5"/>
                </div>
                <div className="btn-row">
                    <button type="button"
                            disabled={!this.state.changed}
                            onClick={this._handleCancel}
                            className="btn btn-default">{I18n.t('common.cancel')}</button>
                    <button type="button"
                            onClick={this._handleOk}
                            disabled={!this.state.ok}
                            className="btn btn-default">{I18n.t('common.create')}</button>
                </div>
            </form>
        </div>);
    }
}

export default NoteForm;
