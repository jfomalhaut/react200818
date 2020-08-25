import React from 'react';

const Main = ({ match: { params: { name } } }) => {
	
	return (
		<h1>Main Page value: {name}</h1>
	);
};

export default Main;