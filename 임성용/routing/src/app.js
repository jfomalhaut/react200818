import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './routers/Home';
import Main from './routers/Main';
import List from './routers/List';
import Navigation from './component/Navigation';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/home" component={Home} exact />
				<Route path="/main/:name" component={Main} />
				<Route path="/list" component={List} />
				<Redirect path="*" to="/home" />
			</Switch>
		</BrowserRouter>


		);
};

export default App;