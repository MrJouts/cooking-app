import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/** Header */
import Header from "./components/header/Header";

/** Pages */
import Home from "./components/pages/Home";
import Recetas from "./components/pages/Recetas";
import Contacto from "./components/pages/Contacto";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
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
