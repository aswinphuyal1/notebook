

import React, { useContext } from 'react';
import notecontext from '../context/notecontext';
const Notes = () => {

    const context = useContext(notecontext);
    const { notes, setNotes } = context;

  return (
   
    <div calsName="container my-3">
          <h1>Your Notes🦹</h1>
    
    {notes.map((note) => {
      return note.title;
    })}
    </div>
  )
}

export default Notes
