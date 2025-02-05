import React, { useState } from 'react';
import notecontext from './notecontext';

const Notestate = (props) => {
  const [notes, setNotes] = useState([
    {
      "_id": "679a2db9396c0b658e1fe60e",
      "user": "6799ebf683cfc4ff399d2b7d",
      "title": "My Title",
      "description": "hi its bro",
      "tag": "personal",
      "date": "2025-01-29T13:31:37.267Z",
      "__v": 0
    },
    {
      "_id": "679a2db9396c0b658e1fe610",
      "user": "6799ebf683cfc4ff399d2b7d",
      "title": "My Title",
      "description": "hi its bro",
      "tag": "personal",
      "date": "2025-01-29T13:31:37.440Z",
      "__v": 0
    },
    {
      "_id": "679a2db9396c0b658e1fe612",
      "user": "6799ebf683cfc4ff399d2b7d",
      "title": "My Title",
      "description": "hi its bro",
      "tag": "personal",
      "date": "2025-01-29T13:31:37.596Z",
      "__v": 0
    },
    {
      "_id": "679a2db9396c0b658e1fe614",
      "user": "6799ebf683cfc4ff399d2b7d",
      "title": "My Title",
      "description": "hi its bro",
      "tag": "personal",
      "date": "2025-01-29T13:31:37.753Z",
      "__v": 0
    },
    {
      "_id": "679a2db9396c0b658e1fe616",
      "user": "6799ebf683cfc4ff399d2b7d",
      "title": "My Title",
      "description": "hi its bro",
      "tag": "personal",
      "date": "2025-01-29T13:31:37.914Z",
      "__v": 0
    }
  ]);

  return (
    <notecontext.Provider value={{ notes, setNotes }}>
      {props.children}
    </notecontext.Provider>
  );
}

export default Notestate;