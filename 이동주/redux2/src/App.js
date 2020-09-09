import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch  } from 'react-router-dom';
import { Product, Cart, Detail } from './routers';
import './Product.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/cart" component={Cart} />
                <Route path="/detail" component={Detail} />
                <Route path="/product" component={Product} />
                <Redirect to="/product" />
            </Switch>
        </Router>
    );
};

export default App;