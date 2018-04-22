import { ObjectData } from '../interfaces/objectData.interface';
import { GotObjectService } from '../services/gotObjectService';
import { ObjectActions, SAVE_OBJECT } from './actionTypes';

/**
 * TODO: 
 * @param object 
 * @param setId 
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
