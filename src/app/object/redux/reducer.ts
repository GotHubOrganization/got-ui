import { GotObjectDto } from '../dto/gotObject.dto';
import {  } from './actions';
import { ObjectActions, SAVE_OBJECT } from './actionTypes';
import { State as ObjectState } from './state';

export default function (state: ObjectState = new ObjectState(), action: ObjectActions): ObjectState {
    const objects = { ...state.objects };
    switch (action.type) {
        case SAVE_OBJECT:
            objects[action.payload.id] = action.payload as GotObjectDto;
            return { ...state, objects };
        default:
            return { ...state };
    }
}
