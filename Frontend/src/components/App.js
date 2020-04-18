import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";

import StreamTest from "./streams/StreamTest";
import StreamLogin from "./streams/StreamLogin";
import StreamReg from "./streams/StreamReg";
import StreamDashboard from "./streams/StreamDashBoard";
import Navbar from "./Navbar";




const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>

          <Route path="/" exact component={StreamTest} />
          <Route path="/login" exact component={StreamLogin} />
          <Route path="/register" exact component={StreamReg} />
          <Route path="/dashboard" exact component={StreamDashboard} />

        </Switch>
      </Router>
    </div>
  );
};

export default App;
