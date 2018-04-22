import { ObjectData } from '../interfaces/objectData.interface';

export const SAVE_OBJECT: string = 'OBJECT.SAVE_OBJECT';

type FetchObject = {type: typeof SAVE_OBJECT, payload: ObjectData};

export type ObjectActions = FetchObject;
