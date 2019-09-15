import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Board from "./components/Board";
import Header from "./components/Header";
import Home from "./components/Home";
import BoardDetail from "./components/BoardDetail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/board" exact component={Board} />
        <Route path="/board/:id" component={BoardDetail} />
      </Switch>
    </>
  </Router>
);
