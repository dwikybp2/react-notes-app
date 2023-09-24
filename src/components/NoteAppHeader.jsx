import React from 'react';
import NoteSearch from './NoteSearch';

function NoteAppHeader({ search, onSearch }) {
    return (
        <div className='note-app__header'>
            <h1>Dwiky Notes</h1>
            <NoteSearch search={search} onSearch={onSearch} />
        </div>
    );
}

export default NoteAppHeader;