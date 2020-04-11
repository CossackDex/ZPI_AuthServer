import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";

import StreamTest from "./streams/StreamTest";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={StreamTest} />
          <Route path="/reg" exact component={StreamTest} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
