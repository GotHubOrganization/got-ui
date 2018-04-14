import { FETCH_OBJECT, FETCH_ERROR } from './actionTypes';
import { GotTypeService } from '../../type';

export function fetchObject(typeName) {
    return (dispatch) => {
        let instance = GotTypeService.getInstance();
        instance.get(typeName).then(result => {
            dispatch({
                type: FETCH_OBJECT,
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
