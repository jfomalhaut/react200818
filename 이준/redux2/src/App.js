import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Product, Cart, Detail } from './routers';
import './Product.css';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/product" component={Product} />
				<Route path="/cart" component={Cart} />
				<Route path="/detail" component={Detail} />
				<Redirect to="/product" />
			</Switch>
		</Router>
	)
};

export default App;