import React from 'react';
//Import Components
import Note from './Note';

const NoteList = ({ notes, setNotes, filteredNotes }) => {
    return (
        <div className="note-container">
            <ul className="note-list">
                {filteredNotes.map((note) => (
                    <Note
                        setNotes={setNotes}
                        notes={notes}
                        key={note.id}
                        note={note}
                        text={note.text}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NoteList;
