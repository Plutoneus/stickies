import React from 'react';

const Todo = ({ text, note, notes, setNotes }) => {
    //Events
    const deleteHandler = () => {
        setNotes(notes.filter((el) => el.id !== note.id));
    }

    // Flip property
    const completeHandler = () => {
        setNotes(notes.map(item => {
            if(item.id === note.id) {
                return {
                    ...item,
                    completed: !item.completed,
                }
            }
            return item;
        }));
    }

    return (
        <div className="note">
            <li className={`note-item ${note.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} ><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} ><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;
