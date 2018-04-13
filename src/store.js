import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export {
    store
}