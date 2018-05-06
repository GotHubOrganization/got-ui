/**
 * This module provides all got-type related react components and functionality. So every anstract type
 * declaration in the got environment should be presented by this module on the ui. Also all got-type
 * related API calls or got-type related state should be implemented here.
 */

export { isPrimitive, Map } from './helpers/typeHelper';
export { default as TypeReducer } from './redux/reducer';
export { fetchType } from './redux/actions';
export { GotTypePropertyDto } from  './dto/gotTypeProperty.dto';
export { GotTypeDto } from './dto/gotType.dto';
export { State } from './redux/state';
