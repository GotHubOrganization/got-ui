import { DATAEDITOR_FETCHEDENTITY, DATAEDITOR_FETCHENTITY, DATAEDITOR_FETCHEDDATA, DATAEDITOR_FETCHDATA } from './actionTypes';

const initialState = {
    loading: false,
    entity: undefined,
    data: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DATAEDITOR_FETCHENTITY:
            return Object.assign({}, state, { loading: true });
        case DATAEDITOR_FETCHEDENTITY:
            return Object.assign({}, state, { loading: false, entity: action.payload.entity, data: action.payload.data });
        default:
            return state;
    }
}