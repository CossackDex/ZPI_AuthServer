import React from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import history from '../history';

import TestComp from './TestComp';

const App = () => {
    return (
        <div
    className = "ui container" >
        <Router
    history = {history} >
        <Switch >
        <Route
    path = "/"
    exact
    component = {TestComp}
    />
    </Switch>
    </Router>
    </div>
)
    ;
}

export default App;