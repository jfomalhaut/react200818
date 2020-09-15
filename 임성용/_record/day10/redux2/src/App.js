import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Product, Detail, Cart } from "./routers";
// import { Product } from "./routers/Product.js";
// import { Detail } from "./routers/Detail.js";
// import { Cart } from "./routers/Cart.js";
import './Product.css';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/product" component={Product} />
				<Route path="/detail" component={Detail} />
				<Route path="/cart" component={Cart} />
				<Redirect to="product" />
			</Switch>
		</Router>
	)
};

export default App;