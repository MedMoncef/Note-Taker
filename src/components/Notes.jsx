import React, { useState } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');

    const addNote = () => {
        if (currentNote.trim()) {
            setNotes([...notes, currentNote]);
            setCurrentNote('');
        }
    };

    return (
        <div className="notes-container">
            <input
                type="text"
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                placeholder="Type your note..."
                onKeyDown={(e) => e.key === 'Enter' && addNote()}
            />
            <button onClick={addNote}>Add Note</button>
            
            <div className="notes-list">
                {notes.map((note, index) => (
                    <div key={index} className="note-item">{note}</div>
                ))}
            </div>
        </div>
    );
};

export default Notes;