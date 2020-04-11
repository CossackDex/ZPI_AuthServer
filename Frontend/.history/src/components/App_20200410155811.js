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
        < Header / >
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