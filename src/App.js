import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Media from './views/Media';
import Home from './views/Home';
import Contact from './views/Contact';
import About from "./views/About";
import Works from "./views/Works";
import Footer from "./views/Footer";
import Synth from "./views/Synth";
import Waveforms from "./views/Waveforms";
import Spectrogram from "./views/Spectrogram";
import Phoneinst from "./views/Phoneinst";
import Featurenator from "./views/Featurenator";
import ArturiaPresets from "./views/ArturiaPresets";
import FinalProject from "./views/FinalProject";
import Elastic001 from "./views/ED001";
import Elastic003 from "./views/ED003";
import Scrolltotop from "./components/Scrolltotop";

function App() {
  return (
    <Router>
      <div className='contentContainer'>
        <Navbar/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/media' component={Media}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/works' component={Works}/>
          <Route path='/synth' component={Synth}/>
          <Route path='/waveforms' component={Waveforms}/>
          <Route path='/spectrogram' component={Spectrogram}/>
          <Route path='/phoneinst' component={Phoneinst}/>
          <Route path='/featurenator' component={Featurenator}/>
          <Route path='/arturiapresets' component={ArturiaPresets}/>
          <Route path='/finalproject' component={FinalProject}/>
          <Route path='/elasticdummy001' component={Elastic001}/>
          <Route path='/elasticdummy003' component={Elastic003}/>
        </Switch>
        <Scrolltotop/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
