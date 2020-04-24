import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";

import StreamTest from "./streams/StreamTest";
import StreamLogin from "./streams/StreamLogin";
import StreamReg from "./streams/StreamReg";
import StreamDashboard from "./streams/StreamDashboard";
import StreamDashboardAdmin from "./streams/StreamDashboardAdmin";
import StreamDashBoardUser from "./streams/StreamDashBoardUser";
import StreamDashboardServices from "./streams/StreamDashboardServices";
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
          {/* <Route path="/dashboard" exact component={StreamDashboard} /> */}
          
          <Route path="/dashboard/admin/users" exact component={StreamDashboardAdmin} />
          <Route path="/dashboard/admin/services" exact component={StreamDashboardServices}/>
          <Route path="/dashboard/user" exact component={StreamDashBoardUser} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
