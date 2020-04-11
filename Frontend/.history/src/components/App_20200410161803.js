import {Route, Router} from 'react-router-dom;'
import TestComp from './TestComp';
import history from

..
/history;

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