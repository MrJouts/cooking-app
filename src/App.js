import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/** Header */
import Header from "./components/header/Header";

/** Pages */
import Home from "./components/pages/Home";
import Recetas from "./components/pages/Recetas";
import Contacto from "./components/pages/Contacto";

import Modal from "./components/Modal";

// import logo from "./logo192.png";

function App() {

  const showModal = () => console.log('show modal app.js');

  return (
    <div className="App">
      <Router>
        <Header showModal={showModal} />
        <Modal />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recetas">
            <Recetas />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
