import React from 'react';
import { Route } from 'react-router-dom';
import  GotObjectView  from './components/got-object-view';

export const objectRoutes = [
    <Route path="/object/:type" component={GotObjectView} />  
];
