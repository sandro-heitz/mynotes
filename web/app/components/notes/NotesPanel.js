
import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';

const makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then((val) =>
            hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
        );
        promise.catch((error) =>
            hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};

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
        fetch('/rest/notes', {
        // fetch('/notes.json', {
            method: 'get'
        }).then(function(response) {
            if (response.status == 200) {
                response.json().then(notes => {
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

