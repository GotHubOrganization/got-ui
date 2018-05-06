/**
 * This types describes objects with many string keys that contain objects of type T.
 */
export type Map<T> = { [key: string]: T };

/**
 * Checks if a given type name points to a primitive type within the got environment.
 * @param {String} typeName 
 */
export const isPrimitive = (typeName: string) => {
    return typeName === 'string' ||
        typeName === 'boolean' ||
        typeName === 'number';
};
