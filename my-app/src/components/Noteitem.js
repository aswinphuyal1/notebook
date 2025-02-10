//rafce 
import React from 'react'
// Add this line to import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Noteitem = (props) => {
 const    {note}=props
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
