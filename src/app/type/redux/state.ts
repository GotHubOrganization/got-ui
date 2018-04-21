import { GotTypeDto, Map } from 'app/type';

/**
 * State of the `app/type` module. It groups together the type related state. Currently it
 * holds all fetched type declarations where the type names act as object keys.
 */
export class State {
    /**
     * Collection of type declarations accessible by type name. For the type "Person" for
     * example call `state.types.Person` or `state.types['Person']`. Initial state is empty.
     */
    public types: Map<GotTypeDto> = {};

    /**
     * Error object that might be set, when a type action causes an error. Action triggering
     * components can render error messages.
     */
    public error: Error | null = null;
}
