import { GotTypeDto } from '../dto/gotType.dto';
import { Map } from '../helpers/typeHelper';
import { FETCH_ERROR, FETCH_TYPE, TypeActions } from './actionTypes';

export type TypeState = { error: Error | null, types: Map<GotTypeDto> };
const initialState: TypeState = { error: null, types: {} };

export default function (state: TypeState = initialState, action: TypeActions): TypeState {
    const types = { ...state.types };
    switch (action.type) {
        case FETCH_TYPE:
            types[action.payload.name] = action.payload as GotTypeDto;
            return { ...state, types };
        case FETCH_ERROR:
            return { ...state, error: action.payload as Error };
        default:
            return { ...state };
    }
}
