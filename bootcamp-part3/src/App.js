import "./styles.css";
import { Note } from "./Note";
import { useState } from "react";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNotes] = useState("");

  const [showAll, setShowAll] = useState(true);

  const handlerShowAll = (event) => {
    setShowAll(() => !showAll);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const noteAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };

    setNotes(notes.concat(noteAdd));
    setNewNotes("");
  };

  const handlerChange = (event) => {
    setNewNotes(event.target.value);
  };

  return (
    <div className="App">
      <h1>Notes</h1>

      <button onClick={handlerShowAll}>
        {showAll ? "Show only important" : "Show All"}
      </button>
      <ul>
        {notes
          .filter((note) => {
            if (showAll === true) return true;

            return note.important !== true;
          })
          .map((note) => (
            <Note
              key={note.id}
              id={note.id}
              content={note.content}
              date={note.date}
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
