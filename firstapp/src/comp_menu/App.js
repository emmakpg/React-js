import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Services from "./pages/Services";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
