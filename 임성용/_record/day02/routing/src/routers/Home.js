import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
	const [data, setData] = useState(8);

	const increase = () => {
		setData(data + 1);
	};

	const decrease = () => {
		setData(data - 1);
	};

	useEffect(() => {
		console.log("Rendering Home Component !!");
		setData(data);
	}, []);

	useEffect(() => {
		console.log('Change !!');
	}, [data]);

	useEffect(() => {
		if(data%5 == 0) {
			alert('5배수');
		}
	}, [data]);

	return (
		<div>
			<h1>Home Page {data}</h1>
			<button onClick={increase}>증가</button>
			<button onClick={decrease}>감소</button>
		</div>
	);
};

export default Home;