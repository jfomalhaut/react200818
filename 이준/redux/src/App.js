import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2 } from './routers';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/page1" component={Page1} />
				<Route path="/page2" component={Page2} />
				<Redirect to="/page1" />
			</Switch>
		</Router>
	);
};

export default App;