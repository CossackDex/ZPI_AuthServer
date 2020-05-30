import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import signReducer from './signReducer'
import adminReducer from './adminReducer'
import thisReducer from './thisReducer'
import serviceReducer from './serviceReducer'

export default combineReducers({
    form: formReducer,
    sign: signReducer,
    admin: adminReducer,
    this: thisReducer,
    service: serviceReducer
});