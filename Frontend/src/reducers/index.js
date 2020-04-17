import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import signReducer from './signReducer'

export default combineReducers({
    form: formReducer,
    sign: signReducer
});