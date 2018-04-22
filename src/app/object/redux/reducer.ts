import { ObjectData } from '../interfaces/objectData.interface';
import { } from './actions';
import { FETCH_OBJECT, ObjectActions, SAVE_OBJECT } from './actionTypes';
import { State as ObjectState } from './state';

export default function (state: ObjectState = new ObjectState(), action: ObjectActions): ObjectState {
    const objects = { ...state.objects };
    switch (action.type) {
        case SAVE_OBJECT:
        case FETCH_OBJECT:
            objects[action.payload.id] = action.payload as ObjectData;
            return { ...state, objects };
        default:
            return { ...state };
    }
}
