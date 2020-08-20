import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './routers/Home';
import Main from './routers/Main';
import List from './routers/List';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/home" component={Home} exact/>
                <Route path="/main" component={Main} />
                <Route path="/List" component={List} />
                <Redirect path="*" to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;