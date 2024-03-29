import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about.js";
import Affiliations from "./pages/affiliations.js";
import Projects from "./pages/projects.js";
import Resume from "./pages/resume.js";
import Games from "./pages/games.js";
import Lost from "./pages/404.js";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/About" exact component={About} />
          <Route path="/Affiliations" exact component={Affiliations} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Resume" exact component={Resume} />
          <Route path="/Games" component={Games} />
          <Route path="/*" component={Lost} />
        </Switch>
      </Router>
    );
  }
}
