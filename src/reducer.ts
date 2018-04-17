import { combineReducers } from 'redux';
import { TypeReducer } from './type';

const rootReducer = combineReducers({
    type: TypeReducer
});

export default rootReducer;
