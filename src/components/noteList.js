import React from "react";
import NoteBody from "./noteBody";
import AddNote from "./addNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteBody
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote
        handleAddNote={handleAddNote}
      />
    </div>
  );
};

export default NoteList;
