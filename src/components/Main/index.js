import React from "react";
import Series from "../../containers/series";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SingleSeries from "../../containers/SingleSeries";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={SingleSeries} />
      </Switch>
    </Router>
  );
};

export default Main;
