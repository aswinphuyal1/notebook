import React, { useContext } from 'react';
import notecontext from '../context/notecontext';

const Home = () => {
  const context = useContext(notecontext);
  const { notes, setNotes } = context;

  return (
    <div className="container my-4">
      <h1>👨🏻‍🎨User enter your Notes here please🧔🏻‍♂️</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h1>Your Notes🦹</h1>
    
      {notes.map((note) => {
        return note.title;
      })}
     </div>
  );
}


export default Home;
