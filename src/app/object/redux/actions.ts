
import { State as RootState } from 'app/redux';
import { GotObjectDto } from '../dto/gotObject.dto';
import { getNewId, isNew } from '../helpers/objectHelpers';
import { ObjectActions, SAVE_OBJECT } from './actionTypes';

/**
 * TODO:
 * Fetches a type by its name and adds it to the application state
 * as `state.type.types[typeName]`
 * @param {String} typeName 
 */
export function saveObject(object: GotObjectDto) {
    return (
        dispatch: (action: ObjectActions) => void,
        getState: () => RootState
    ) => {
        if(isNew(object)){
            const state = getState();
            const existingObjects = state.object ? state.object.objects || {} : {};
            object.id = getNewId(
                'local-object', 
                id => existingObjects[id] ? true : false
            );
        }

        dispatch({
            type: SAVE_OBJECT,
            payload: object
        });
    };
}
