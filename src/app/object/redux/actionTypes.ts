import { ObjectData } from '../interfaces/objectData.interface';

/**
 * TODO: better action typing see:
 * https://medium.com/@martin_hotell/redux-typescript-typed-actions-with-less-keystrokes-d984063901d
 */

export const SAVE_OBJECT: string = 'OBJECT.SAVE_OBJECT';
export const FETCH_OBJECT: string = 'OBJECT.FETCH_OBJECT';

type SaveObject = {type: typeof SAVE_OBJECT, payload: ObjectData};
type FetchObject = {type: typeof FETCH_OBJECT, payload: ObjectData};

export type ObjectActions = SaveObject | FetchObject;
