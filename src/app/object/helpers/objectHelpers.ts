import { ObjectData } from '../interfaces/objectData.interface';

/**
 * Reads the id of an object and returns true when its a new object.
 */
export const isNew = (object: ObjectData) => {
    return !object.id || object.id.startsWith('new');
};

/**
 * Creates a new id based on a prefix and an index.
 * @param prefix 
 * @param exists this is a callback, which is fired to determine if a staged id exists.
 * Otherwise the function will call itself until the callback returns false.
 * @param index 
 */
export const getNewId = (
    prefix: string,
    exists?: (id: string) => boolean,
    index: number = 1
) => {
    const id = `${prefix}-${index}`;
    if(exists && exists(id)){
        return getNewId(prefix, exists, index++);
    } else {
        return id;
    }
};
