import React from "react";
import "./App.css";
import CountryDetails from "./components/CountryDetails";
import SideNav from "./components/SideNav";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <div className="row">
          <SideNav />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/:cca3" exact component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
