import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/modal" exact component={Modal} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
