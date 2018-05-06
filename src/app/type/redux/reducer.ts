import { GotTypeDto } from '../dto/gotType.dto';
import { FETCH_ERROR, FETCH_TYPE, TypeActions } from './actionTypes';
import { State as TypeState } from './state';

export default function (
    state: TypeState = new TypeState(),
    action: TypeActions
): TypeState {
    const types = { ...state.types };
    switch (action.type) {
        case FETCH_TYPE:
            types[action.payload.name] = action.payload as GotTypeDto;
            return { error: null, types };
        case FETCH_ERROR:
            return { ...state, error: action.payload as Error };
        default:
            return { ...state };
    }
}
