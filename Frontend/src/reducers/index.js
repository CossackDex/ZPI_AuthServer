import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import signReducer from './signReducer'
import adminReducer from './adminReducer'

export default combineReducers({
    form: formReducer,
    sign: signReducer,
    admin: adminReducer
});