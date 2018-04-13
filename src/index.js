import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import appRoutes from './routes';

ReactDOM.render(
    <BrowserRouter>
        <Switch children={appRoutes} />
    </BrowserRouter>
    , document.getElementById('root')
);
