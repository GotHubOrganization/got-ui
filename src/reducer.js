import {combineReducers} from 'redux';
import { DataEditorReducer } from './data-editor';

const rootReducer = combineReducers({
    dataEditor : DataEditorReducer
});

export default rootReducer;
