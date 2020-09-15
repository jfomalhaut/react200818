import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { List, Product, Detail, Cart } from "./routers";
import './Product.css';

const App = () => {
	return (
		<Router>
		<ul>
			<li><Link to="/cart">장바구니</Link></li>
			<li><Link to="/list">상품리스트</Link></li>
		</ul>
			<Switch>
				<Route path="/list" component={List} />
				<Route path="/product" component={Product} />
				<Route path="/detail" component={Detail} />
				<Route path="/cart" component={Cart} />
				<Redirect to="list" />
			</Switch>
		</Router>
	)
};

export default App;