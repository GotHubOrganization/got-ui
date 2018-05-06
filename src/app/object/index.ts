/**
 * This module provides all got-object related react components and functionality. So every concrete
 * object in the got environment should be presented by this module on the ui. Also all got-object
 * related API calls or got-object related state should be implemented here.
 */

export { Routes } from './Routes';
export { State } from './redux/state';
export { default as ObjectReducer } from './redux/reducer';
