import { DATAEDITOR_FETCHDATA, DATAEDITOR_FETCHEDDATA } from './actionTypes';

const initialState = {
    loading: false,
    data: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DATAEDITOR_FETCHDATA:
            return Object.assign({}, state, { loading: true });
        case DATAEDITOR_FETCHEDDATA:
            return Object.assign({}, state, { loading: false, data: action.payload });
        default:
            return state;
    }
}