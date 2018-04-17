import { GotTypeDto } from '../dto/got-type.dto';

export const FETCH_TYPE: string = 'TYPE.FECTH_TYPE';
export const FETCH_ERROR: string = 'TYPE.FETCH_ERROR';

type FetchType = {type: typeof FETCH_TYPE, payload: GotTypeDto};
type FetchError = {type: typeof FETCH_ERROR, payload: Error};

// const fetchType = (gotType: GotTypeDto): FetchType => {
//     return {type: FETCH_TYPE, payload: gotType};
// }
// const fetchError = (error: Error): FetchError => {
//     return {type: FETCH_ERROR, payload: error};
// }

export type TypeActions = FetchType | FetchError;
