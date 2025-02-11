import React, { useContext } from 'react';
import notecontext from '../context/notecontext';
import Noteitem from './Noteitem';
const Notes = () => {

    const context = useContext(notecontext);
    const { notes, setNotes } = context;

  return (
    <div className="row my-3">
      <h1>Your Notes🦹</h1>
      {notes.map((note) => {
        return <Noteitem note={note} key={note.id} />
      })}
    </div>
  )
}

export default Notes
