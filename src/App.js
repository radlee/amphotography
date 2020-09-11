import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import JumboTwo from './components/jumbotron/jumbotron.component';
import JumboOne from './components/jumbotron-one/jumbotron.component';
import JumboSecond from './components/jumbotron-second/jumbotron.component';
import JumboThree from './components/jumbotron-three/jumbotron.component';
import JumboLast from './components/jumbotron-last/jumbotron.component';
import ContactForm from './components/contact-us/contact.component';
import './App.css';
// import Navigation from "./components/Navigation"
import { Jumbotron } from 'reactstrap';


class App extends Component {
  render() {
    return (
        <div className="App">
          {/* <Navigation /> */}
          <Jumbotron id="about" className="jumbotron">
              <h1 className="display-1 ase">  ASELMO|MAFANGA</h1>
              <h1 className="am">  ASELMO</h1>
              <h1 className="am">  MAFANGA</h1>
              <h1 className="display-3"> Photography</h1>
              <p className="lead">OUTDOOR | NEW-BORN-ABY PHOTOSHOOT | PARTIES | VIDEOS | ORGANIZED | ECT.. </p>
              <hr className="my-2" />
              <p className="para2">Pride in photoshoot quality served for the viewer's aesthetics indulgement.</p>
              <p className="lead">
                  {/* <Button color="primary">Connect</Button> */}
              </p>
          </Jumbotron>
          {/* <h1 className="display-1">  EVENTS PHOTOGRAPHY</h1> */}
          <p className="captions">Set up a time and date of shooting.</p>
          <JumboTwo />
          <br />
          <JumboOne />
          <br />
          <JumboSecond />
          <br />
          <JumboThree />
          <br />
          <JumboLast />
          <br />
          <ContactForm />
          <br />
          {/* <Spinner /> */}
          <br />
          <Footer />
        </div>
    );
  }
}

export default App;
