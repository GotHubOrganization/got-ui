import React, { Component } from 'react';
import { FooterComponent, HeaderComponent } from './layout';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import appRoutes from './routes';
import { Container } from 'semantic-ui-react';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <HeaderComponent />
                    <Container style={{ marginTop: '5em' }}>
                        <BrowserRouter >
                            <Switch children={appRoutes} />
                        </BrowserRouter>
                    </Container>
                    <FooterComponent />
                </React.Fragment>
            </Provider>
        );
    }
}
