
import React, { Component } from 'react';

import NoteView from './NoteView';

const NotesList = ({ notes }) => {
    let nr = 0;
    return <div className="notes-list">{
        notes.map(n => {
            nr++;
            return <NoteView number={nr} note={n} key={n.id}/>
        })
    }</div>
}

export default NotesList;

