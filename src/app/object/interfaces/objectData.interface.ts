/**
 * Describes all plain javascript objects which have a got object id and optionally an assigned
 * type name. The id could be used to communicate with the got graph whereas the type is used to
 * validate the object or fill it in a rendered type view.
 */
export interface ObjectData {
    id: string;
    type?: string;
}
