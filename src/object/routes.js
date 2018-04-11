import React from 'react';
import { Route } from 'react-router-dom';
import { GotObjectView } from './got-object-view';

export const objectRoutes = [
    <Route path="/object/:type" component={GotObjectView} />  
];
