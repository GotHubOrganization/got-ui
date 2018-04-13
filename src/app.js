import React, { Component } from 'react';
import { FooterComponent, HeaderComponent } from './layout';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import appRoutes from './routes';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                   
                    <BrowserRouter>
                        <Switch children={appRoutes} />
                    </BrowserRouter>
                    
                </React.Fragment>
            </Provider>

        );
    }
}