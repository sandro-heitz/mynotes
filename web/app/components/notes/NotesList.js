
import React, { Component } from 'react';

import NoteView from './NoteView';

let nr = 0;

const NotesList = ({ notes }) => (
        <div className="notes-list">{
            notes.map(n => {
                nr++;
                return <NoteView number={nr} note={n} key={n.id}/>
            })
        }</div>
)

export default NotesList;

