import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import { useSelector } from 'react-redux'


import StreamLogin from "./streams/StreamLogin";
import StreamReg from "./streams/StreamReg";

import StreamAdmin from "./streams/StreamAdmin";
import StreamUser from "./streams/StreamUser";
import StreamServices from "./streams/StreamServices";
import StreamEditEmail from "./streams/StreamEditEmail";
import StreamCreateService from "./streams/StreamCreateService";
import StreamEditService from "./streams/StreamEditService";



import Navbar from "./Navbar";

const App = () => {
 const role = useSelector(state => state.sign.role);
  return (
    <div className="ui container">
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>
          <Route path="/dashboard/login" exact component={StreamLogin} />
          <Route path="/dashboard/register" exact component={StreamReg} />
          <Route path="/dashboard/admin/users" exact component={StreamAdmin} />
          <Route path="/dashboard/admin/users/:id/email" exact component={StreamEditEmail} />
          <Route path="/dashboard/admin/services" exact component={StreamServices}/>
          <Route path="/dashboard/admin/services/create" exact component={StreamCreateService}/>
          <Route path="/dashboard/admin/services/edit/:name" exact component={StreamEditService}/>
          {role > -1 && <Route path="/dashboard/user" exact component={StreamUser} />}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
