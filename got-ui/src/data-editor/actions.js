import { DATAEDITOR_FETCHDATA, DATAEDITOR_FETCHEDDATA } from './actionTypes';
import dataService from './entityDataService';

export function getEntity (entityId) {
    return (dispatch) => {
        dispatch({type: DATAEDITOR_FETCHDATA});
        dataService.getEntity(entityId).then(data => {
            dispatch({type: DATAEDITOR_FETCHEDDATA, payload: data});
        })
    }
}