import {combineReducers} from 'redux';
import { dataEditorReducer } from './data-editor';

const rootReducer = combineReducers({
    dataEditor : dataEditorReducer
});

export default rootReducer;