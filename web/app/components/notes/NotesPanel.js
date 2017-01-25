
import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';
import { makeCancelable } from '../../common/utils';


class NotesPanel extends Component {
    constructor() {
        super();
        let notes = [];
        let id = 0;
        this.state = { notes };
        this.priv = { id };
    }
    componentDidMount() {
        let self = this;
        this.priv.fetchCall = makeCancelable(fetch('/rest/notes', {
            method: 'get'
        }));
        this.priv.fetchCall.promise.then(function(response) {
            if (response.status == 200) {
                self.priv.jsonCall = makeCancelable(response.json());
                self.priv.jsonCall.promise.then(notes => {
                    notes.forEach(n => self.priv.id = Math.max(n.id, self.priv.id));
                    self.setState({notes});
                });
            } else {
                throw response;
            }
        }).catch(function(err) {
            console.log(err);
        });
    }
    componentWillUnmount() {
        cancelAll();
    }
    cancelAll = () => {
        if (this.priv.fetchCall) {
            this.priv.fetchCall.cancel();
        }
        if (this.priv.jsonCall) {
            this.priv.jsonCall.cancel();
        }
    }
    addNote = (n) => {
        this.priv.id++;
        n.id = this.priv.id;
        let notes = [n, ...this.state.notes];
        this.setState({ notes });
    }
    render() {
        return (<div>
            <NoteForm addNote={this.addNote} />
            <NotesList notes={this.state.notes} />
        </div>);
    }
}

export default NotesPanel;

