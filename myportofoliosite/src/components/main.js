import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Projects from "./projects";
import Resume from "./resume";
import Music from "./music";
import Login from "./login";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/music" component={Music} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Main;
