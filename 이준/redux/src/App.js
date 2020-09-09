import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2 } from './routers';
import { useSelector } from 'react-redux';

const App = () => {

	const count = useSelector(({ Reducer }) => Reducer.count);

	return (
		<Router>
			<header>
				<h1> count: { count } </h1>
			</header>
			<Switch>
				<Route path="/page1" component={Page1} />
				<Route path="/page2" component={Page2} />
				<Redirect to="/page1" />
			</Switch>
		</Router>
	);
};

export default App;