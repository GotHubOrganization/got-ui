import { ObjectData } from '../interfaces/objectData.interface';
import { GotObjectService } from '../services/gotObjectService';
import { FETCH_OBJECT, ObjectActions, SAVE_OBJECT } from './actionTypes';

/**
 * Action creator for dispatching the saveObject action. It depends on the GotObjectService
 * which posts the object to the API.
 */
export function saveObject(object: ObjectData) {
    return (dispatch: (action: ObjectActions) => void) => {
        const gotObjectService: GotObjectService = new GotObjectService();
        return gotObjectService.save(object).then((id: string) => {
            dispatch({
                type: SAVE_OBJECT,
                payload: { id, ...object }
            });
            return id;
        });
    };
}

/**
 * Action creator for dispatching the fetchObject action. It depends on the GotObjectService
 * which gets the object from the API.
 */
export function fetchObject(id: string) {
    return (dispatch: (action: ObjectActions) => void) => {
        const gotObjectService: GotObjectService = new GotObjectService();
        return gotObjectService.get(id).then((object: ObjectData) => {
            dispatch({
                type: FETCH_OBJECT,
                payload: { ...object }
            });
            return object;
        });
    };
}
