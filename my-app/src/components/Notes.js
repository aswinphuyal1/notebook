

import React, { useContext } from 'react';
import notecontext from '../context/notecontext';
import Noteitem from './Noteitem';
const Notes = () => {

    const context = useContext(notecontext);
    const { notes, setNotes } = context;

  return (
   
    <div calsName="container my-3">
          <h1>Your Notes🦹</h1>
    
    {notes.map((note) => {
      return <Noteitem note={note}/>
    })}
    </div>
  )
}

export default Notes
