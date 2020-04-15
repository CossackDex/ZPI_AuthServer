import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";

import StreamTest from "./streams/StreamTest";
import StreamLogin from "./streams/StreamLogin";
import StreamReg from "./streams/StreamReg";
import Navbar from "./Navbar";
import {
  Container,
  Header,
  Button,
  Menu,
  Grid,
  Image,
  GridRow,
  GridColumn,
  Card,
  Segment,
  Rail,
  List,
} from "semantic-ui-react";




const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>
          
          <Route path="/" exact component={StreamTest} />
          <Route path="/login" exact component={StreamLogin} />
          <Route path="/register" exact component={StreamReg} />
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
