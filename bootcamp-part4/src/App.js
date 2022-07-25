import "./styles.css";
import { Note } from "./Note";
import { useEffect, useState } from "react";
import { createNote, getAllNotes } from "./services/notes/";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNotes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const noteAdd = {
      userId: 1,
      title: newNote,
      body: newNote
    };

    createNote(noteAdd).then((data) => {
      setNotes(notes.concat(data));
    });

    setNewNotes("");
  };

  const handlerChange = (event) => {
    setNewNotes(event.target.value);
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {loading ? "Cargando" : ""}
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
          />
        ))}
      </ul>
      <form onSubmit={handlerSubmit}>
        <input type="text" onChange={handlerChange} value={newNote} />
        <button> Crear Notas </button>
      </form>
    </div>
  );
}
