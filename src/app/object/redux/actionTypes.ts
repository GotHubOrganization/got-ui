import { GotObjectDto } from '../dto/gotObject.dto';

export const SAVE_OBJECT: string = 'OBJECT.SAVE_OBJECT';

type FetchObject = {type: typeof SAVE_OBJECT, payload: GotObjectDto};

export type ObjectActions = FetchObject;
