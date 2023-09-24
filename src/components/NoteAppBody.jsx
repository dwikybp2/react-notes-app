import React from "react";
import NoteList from './NoteList';
import NoteInput from './NoteInput';

function NoteAppBody({ notes, onDelete, onArchive, addNote }) {
    return (
        <div className='note-app__body'>
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
            <h2>Arsip</h2>
            <NoteList notes={notes.filter(note => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteAppBody;