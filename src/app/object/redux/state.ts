import { Map } from 'app/type';
import { ObjectData } from '../interfaces/objectData.interface';

/**
 * State of the `app/object` module. It groups together the object related state. Currently it
 * holds all fetched or created objects.
 */
export class State {
    /**
     * Collection of objects accessible by object id. For the object with id "39054-oijwf"  for
     * example call `state.objects['39054-oijwf']`.
     */
    public objects: Map<ObjectData> = {};
}
