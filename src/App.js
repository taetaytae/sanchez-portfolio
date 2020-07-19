import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Media from './views/Media';
import Home from './views/Home';
import Contact from './views/Contact';

function App() {
  return (
    <Router>
      <div className='contentContainer'>
        <Navbar/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/media' component={Media}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
