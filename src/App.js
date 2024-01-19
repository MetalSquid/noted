import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/noteList";
import Search from "./components/search";
import Header from "./components/header";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "1/14/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "1/15/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "1/16/2024",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-noted-app-data")
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "react-noted-app-data",
      JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkmode && "darkmode"}`}>
      <div className="container">
        <Header handleToggleDarkmode={setDarkmode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
