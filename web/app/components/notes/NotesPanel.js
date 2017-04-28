
import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NotesListConnector from './NotesListConnector';
import { makeCancelable, createGet } from '../../common/utils';

// class NotesPanel extends Component {
//     constructor() {
//         super();
//         // let notes = [];
//         // let id = 0;
//         // this.state = { notes };
//         // this.priv = { id };
//     }
//     componentDidMount() {
//         // let self = this;
//         // this.priv.fetchCall = makeCancelable(createGet('rest/notes'));
//         // this.priv.fetchCall.promise.then(function(response) {
//         //     if (response.status == 200) {
//         //         self.priv.jsonCall = makeCancelable(response.json());
//         //         self.priv.jsonCall.promise.then(notes => {
//         //             notes.forEach(n => self.priv.id = Math.max(n.id, self.priv.id));
//         //             self.setState({notes});
//         //         });
//         //     } else {
//         //         throw response;
//         //     }
//         // }).catch(function(err) {
//         //     console.log(err);
//         // });
//     }
//     componentWillUnmount() {
//         // cancelAll();
//     }
//     cancelAll = () => {
//         // if (this.priv.fetchCall) {
//         //     this.priv.fetchCall.cancel();
//         // }
//         // if (this.priv.jsonCall) {
//         //     this.priv.jsonCall.cancel();
//         // }
//     }
//     // addNote = (n) => {
//     //     this.priv.id++;
//     //     n.id = this.priv.id;
//     //     let notes = [n, ...this.state.notes];
//     //     this.setState({ notes });
//     // }
//     render() {
const NotesPanel = () => {
    return (
        <div>
            <NoteForm />
            <NotesListConnector />
        </div>);
}

export default NotesPanel;

