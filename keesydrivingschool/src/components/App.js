import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../App.css";

import history from "../history";
import Header from "./Header";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Prices from "./pages/Prices";
import FAQs from "./pages/FAQs";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutUs" exact component={AboutUs} />
            <Route path="/prices" exact component={Prices} />
            <Route path="/faqs" exact component={FAQs} />
            <Route path="/reviews" exact component={Reviews} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
