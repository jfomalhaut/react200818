import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import List from './routers/List';
import Navigation from './components/Navigation';
import './App.css';
// import Home from './routers/Home';
// import Main from './routers/Main';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation/>
			<Switch>
				<Route path="/:category" component={List} exact />
				<Redirect to="/home" path="*" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;