import {Route, Router} from 'react-router-dom;'
import history from '../history';

import TestComp from './TestComp';

const App = () => {
    return (
        < div
    className = "ui container" >
        < Router
    history = {history} >
        < div >
        < Route
    path = "/"
    exact
    component = {TestComp}
    />
    < /div>
    < /Router>
    < /div>
)
    ;
}