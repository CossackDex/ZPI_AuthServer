import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import signReducer from './signReducer'
import adminReducer from './adminReducer'
import thisReducer from './thisReducer'
import serviceReducer from './serviceReducer'
import thisService from './thisService'


export default combineReducers({
    form: formReducer,
    sign: signReducer,
    admin: adminReducer,
    this: thisReducer,
    service: serviceReducer,
    thisService: thisService
});