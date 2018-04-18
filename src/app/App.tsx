import { store } from 'app/redux';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Footer, Header } from './layout';
import { RootRoutes } from './routes';

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header />
                    <Container style={{ marginTop: '5em' }}>
                        <BrowserRouter >
                            <Switch children={RootRoutes} />
                        </BrowserRouter>
                    </Container>
                    <Footer />
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
