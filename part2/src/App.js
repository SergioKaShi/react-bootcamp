import './App.css';
import { useState } from 'react';
import { Note } from './Note.js';

function App(props) {

    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState('');
    const [showAll, setShowAll] = useState(true);

    const handleChange = (event) => {
        setNewNote(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const noteToAddToState = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
        };

        setNotes([...notes, noteToAddToState]);
        setNewNote('');
    };

    const handleShowAll = () => {
        setShowAll(() => !showAll);
    };

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={handleShowAll}>
                {showAll ? 'Mostrar solo notas importantes' : 'Mostrar todas las notas'}
            </button>
            <ul>
                {notes
                    .filter(note => showAll ? true : note.important === true)
                    .map(note => <Note key={note.id} content={note.content} date={note.date} />)
                }
            </ul>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNote} />
                <button>Crer nota</button>
            </form>
        </div>
    );
};

export default App;
