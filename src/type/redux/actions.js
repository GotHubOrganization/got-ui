import { FETCH_TYPE, FETCH_ERROR } from './actionTypes';
import { GotTypeService } from '../services/got-type-service';

/**
 * Fetches a type by its name and adds it to the application state
 * as `state.type.types[typeName]`
 * @param {String} typeName 
 */
export function fetchType(typeName) {
    return (dispatch) => {
        let instance = GotTypeService.getInstance();
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
