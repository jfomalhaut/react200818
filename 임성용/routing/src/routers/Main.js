import React from 'react';

const Main = (props) => {
	console.log(props.match.params.name);
	return (
		<h1>Main Page value: {props.match.params.name}</h1>
	);
};

export default Main;