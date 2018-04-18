import { GotTypeDto, Map } from 'app/type';

/**
 * Root state of the application it groups together the states of the
 * apps submodules `app/type` (and not yet `app/object`).
 */
export class State {
    /**
     * State of the `app/type` submodule.
     */
    public type: Map<GotTypeDto>
}
