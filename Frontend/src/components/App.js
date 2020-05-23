import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import { useSelector } from 'react-redux'


import StreamTest from "./streams/StreamTest";
import StreamLogin from "./streams/StreamLogin";
import StreamReg from "./streams/StreamReg";

import StreamDashboardAdmin from "./streams/StreamDashboardAdmin";
import StreamDashBoardUser from "./streams/StreamDashBoardUser";
import StreamDashboardServices from "./streams/StreamDashboardServices";
import Navbar from "./Navbar";

const App = () => {
 const role = useSelector(state => state.sign.role);
  return (
    <div className="ui container">
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>

          <Route path="/" exact component={StreamTest} />
          <Route path="/dashboard/login" exact component={StreamLogin} />
          <Route path="/dashboard/register" exact component={StreamReg} />

          <Route path="/dashboard/admin/users" exact component={StreamDashboardAdmin} />

          <Route path="/dashboard/admin/services" exact component={StreamDashboardServices}/>

          {role > -1 && <Route path="/dashboard/user" exact component={StreamDashBoardUser} />}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
