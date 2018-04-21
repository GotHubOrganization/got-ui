import { GotObjectDto } from '../dto/gotObject.dto';

export const isNew = (object: GotObjectDto) => {
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
