import {combineReducers} from 'redux';
import { ObjectReducer } from './object'

const rootReducer = combineReducers({
    gotObject : ObjectReducer
});

export default rootReducer;