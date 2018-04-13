import { DATAEDITOR_FETCHENTITY,DATAEDITOR_FETCHEDENTITY } from './actionTypes';
import dataService from '../services/entityDataService';

export function getEntityAndLoadData (entityId) {
    return (dispatch) => {
        dispatch({type: DATAEDITOR_FETCHENTITY});
        dataService.getEntity(entityId).then(entity => {
            
            dataService.getEntityData(entityId).then(data => {
                dispatch({type: DATAEDITOR_FETCHEDENTITY, payload: {
                    entity: entity,
                    data: data
                }});
            });
        });  
    };
}
