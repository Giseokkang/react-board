import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Board from "./components/Board";
import Header from "./components/Header";
import Home from "./components/Home";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/board" exact component={Board} />
      </Switch>
    </>
  </Router>
);
