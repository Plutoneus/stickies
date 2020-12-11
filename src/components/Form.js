import React from 'react';

const Form = ({ inputText, setInputText, notes, setNotes }) => {
    //Here I can write javascript code and functions
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitNoteHandler = (e) => {
        e.preventDefault();/*Prevents refresh*/
        setNotes([
            ...notes,
            {
                text: inputText,
                // subject: inputText,
                // body: false,
                id: Math.random() * 1000 // lol
            }
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="note-input"
            />
        <button onClick={submitNoteHandler} className="note-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="notes" className="filter-note">
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
