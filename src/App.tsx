import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { FooterComponent, HeaderComponent } from './layout';
import { appRoutes } from './routes';
import { store } from './store';

class App extends React.Component {
    public render() {
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

export default App;
