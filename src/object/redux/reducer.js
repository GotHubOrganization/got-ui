import { FETCH_ERROR, FETCH_OBJECT } from './actionTypes';

const initialState = { error: null, dataType: null };

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_OBJECT:
            return Object.assign({}, state, { dataType: action.payload });
        case FETCH_ERROR:
            return Object.assign({}, state, { dataType: null, error: action.payload });
        default:
            return Object.assign({}, state);
    }
}