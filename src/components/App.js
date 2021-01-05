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
import AdminLogin from "./pages/AdminLogin";
import AdminPrice from "./pages/AdminPrice";
import AdminFAQ from "./pages/AdminFAQ";

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
            <Route path="/adminLogin" exact component={AdminLogin} />
            <Route path="/adminPrice" exact component={AdminPrice} />
            <Route path="/adminFAQ" exact component={AdminFAQ} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
