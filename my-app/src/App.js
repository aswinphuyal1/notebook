
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    <>
    <Router>
    <Navbar />

    <Switch>
          <Route  path="/">
            <Home />
          </Route>
          <Route  exact path="/about">
            <About />
          </Route>
         
        </Switch>
     
    </Router>
    </>
  );
}

export default App;
