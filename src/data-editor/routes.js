import React from 'react';
import { Route } from 'react-router-dom';
import component from './component';
import dataEditorComponent from './components/dataEdit';

const dataEditorRoutes = [
    <Route path="/dataeditor/new" component={dataEditorComponent} />,
    <Route path="/dataeditor" component={component} />    
];

export default dataEditorRoutes;
