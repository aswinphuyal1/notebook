import React, { useContext } from 'react';
import notecontext from "../context/notecontext.js";

const About = () => {
  const a = useContext(notecontext);
  return (
    <div>
      this is {a.name} and I am in class {a.class}
    </div>
  );
}

export default About;
