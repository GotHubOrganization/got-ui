import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Switch } from 'react-router-dom';
import appRoutes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <div className="container-fluid">
            <div className="container">
                <BrowserRouter>
                    <Switch children={appRoutes} />
                </BrowserRouter>
            </div>
        </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
