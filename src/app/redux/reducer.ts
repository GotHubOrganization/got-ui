import { ObjectReducer } from 'app/object';
import { TypeReducer } from 'app/type';
import { combineReducers } from 'redux';
import { State } from './state';

/**
 * Root reducer of the application combining all sub reducers.
 */
export const reducer = combineReducers<State>({
    type: TypeReducer,
    object: ObjectReducer
});
