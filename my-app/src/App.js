import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Notestate from './context/Notestate';

function App() {
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
