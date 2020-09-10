import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Product, Cart, Detail, List } from './routers';
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
				<Route path="/cart" component={Cart} />
				<Route path="/detail" component={Detail} />
				<Redirect to="/list" />
			</Switch>
		</Router>
	)
};

export default App;