import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import signReducer from './signReducer'
import adminReducer from './adminReducer'
import thisReducer from './thisReducer'

export default combineReducers({
    form: formReducer,
    sign: signReducer,
    admin: adminReducer,
    this: thisReducer
});