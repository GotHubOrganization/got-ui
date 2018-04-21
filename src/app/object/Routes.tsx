import * as React from 'react';
import { Route } from 'react-router-dom';
import GotObjectView from './components/GotObjectView';

export const Routes = [
    <Route key="object" path="/object/:typeName/:objectId?" component={GotObjectView} />  
];
