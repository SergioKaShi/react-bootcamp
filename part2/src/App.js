import './App.css';
import { useEffect, useState } from 'react';
import { Note } from './Note';
import notesService from './services/notes';

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        notesService.getAll().then(notes => setNotes(notes))
    }, [])

    const handleChange = (event) => {
        setNewNote(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const noteToAddToState = {
            userId: 1,
            title: newNote,
            body: newNote
        };

        notesService.create(noteToAddToState)
            .then(newNote => setNotes(prevNotes => [...prevNotes, newNote]));
        setNewNote('');
    };

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => <Note key={note.id} {...note} />)}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNote} />
                <button>Crer nota</button>
            </form>
        </div>
    );
};

export default App;
