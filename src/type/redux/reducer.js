import { FETCH_ERROR, FETCH_TYPE } from './actionTypes';

const initialState = { error: null, types: {} };

export default function (state = initialState, action) {
    const types = { ...state.types };
    switch (action.type) {
    case FETCH_TYPE:
        types[action.payload.name] = action.payload;
        return { ...state, types };
    case FETCH_ERROR:
        return { ...state, error: action.payload };
    default:
        return { ...state };
    }
}
