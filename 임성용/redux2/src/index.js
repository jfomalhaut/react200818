import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import rootReducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store= {store}>
		<App />
	</Provider>,
	document.getElementById('root')
);