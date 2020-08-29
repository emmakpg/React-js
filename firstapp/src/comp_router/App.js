import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import MealItem from "./MealItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/mealitem/:id" component={MealItem} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h3>Homepage</h3>;
};

export default App;
