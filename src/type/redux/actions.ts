import { GotTypeService } from '../services/got-type-service';
import { FETCH_ERROR, FETCH_TYPE, TypeActions } from './action-types';

/**
 * Fetches a type by its name and adds it to the application state
 * as `state.type.types[typeName]`
 * @param {String} typeName 
 */
export function fetchType(typeName: string) {
    return (dispatch: (action: TypeActions) => void) => {
        const instance = GotTypeService.getInstance();
        instance.get(typeName).then(result => {
            dispatch({
                type: FETCH_TYPE,
                payload: result
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: FETCH_ERROR,
                payload: err
            });
        });
    };
}
