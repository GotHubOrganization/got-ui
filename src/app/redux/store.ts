import { Store } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducer';
import { State } from './state';

export const store: Store<State> = createStore<State>(
    reducer, composeWithDevTools(
        applyMiddleware(thunkMiddleware, logger)
    )
);
