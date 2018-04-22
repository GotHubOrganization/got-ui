import { ObjectData } from '../interfaces/objectData.interface';

export const isNew = (object: ObjectData) => {
    return !object.id || object.id.startsWith('new');
};

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
