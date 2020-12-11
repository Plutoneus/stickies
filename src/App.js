import React, { useState, useEffect } from 'react';

//Importing Components
import Form from './components/Form';
import NoteList from './components/NoteList';

function App() {
    //State stuff
    const [inputText, setInputText] = useState("");
    const [notes, setNotes] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredNotes, setFilteredNotes] = useState([]);

    //USE EFFECT
    //RUN ONCE when the app starts
    useEffect(() => {
    }, []); // STUFF HAPPENS ON RESET ONLY

    useEffect(() => {
        filterHandler();
    }, [notes, status]); // STUFF HAPPENS EVERY TIME notes CHANGES

    //Functions
    const filterHandler = () => {
        switch(status) {
            case 'complete':
                setFilteredNotes(notes.filter(note => note.completed === true))
                break;
            case 'incomplete':
                setFilteredNotes(notes.filter(note => note.completed === false))
                break;
            default:
                setFilteredNotes(notes);
                break;
        }
    };

    // Can only pass props and states downwards
    // i.e. App -> NoteList -> note with setNotes and notes
    return (
        <div className="App">
            <header>
                <h1>Stickies.</h1>
            </header>
            <Form
                setInputText={setInputText}
                inputText={inputText}
                notes={notes}
                setNotes={setNotes}
                setStatus={setStatus}
            /> {/* This creates the note with these parameters */}
            <NoteList
                filteredNotes={filteredNotes}
                setNotes={setNotes}
                notes={notes}
            />
        </div>
    );
}

export default App;
