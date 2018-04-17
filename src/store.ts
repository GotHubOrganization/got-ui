import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
