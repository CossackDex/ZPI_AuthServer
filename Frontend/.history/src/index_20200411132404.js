import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnchancers(applyMiddleware(thunk))
)

ReactDOM.render(
<Provider
store = {store} >
    <App/>
    </Provider>,
document.querySelector('#root')
)
;