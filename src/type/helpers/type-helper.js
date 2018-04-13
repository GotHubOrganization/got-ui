/**
 * Checks if a given type name points to a primitive type within the got environment.
 * @param {String} typeName 
 */
export const isPrimitive = (typeName) => {
    return typeName === 'string' |
        typeName === 'boolean' |
        typeName === 'number';
};
