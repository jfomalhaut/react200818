import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './routers/Main';
import Story from './routers/Story';
import Navigation from './components/Navigation';
import List from '../../routing/src/routers/List';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/main" component={Main} exact />
                <Route path="/story" component={Story} />
                <Route path="/list" component={List} />
                <Redirect path="*" to="/main" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;