import React, { useState, useReducer } from 'react';

// const reducer = (state, action) => {
const reducer = (state, { type, data }) => {
	// switch (action.type) {
	switch (type) {
		case 'INCREASE': {
			return state + parseInt(data);
		}

		case 'DECREASE': {
			return state - parseInt(data);
		}

		default: {
			return state;
		}
	}
};

const Page1 = () => {
	const [count, dispatch] = useReducer(reducer, 0);
	const [data, setData] = useState("");

	const getData = (ev) => {
		const { target: {value} } = ev;
		setData(value);
	};

	const addData = data => {
		dispatch({ type: 'INCREASE', data : data });
	};

	const onIncrease = () => {
		dispatch({ type: 'INCREASE', data : 1 });
	};
	const onDecrease = () => {
		dispatch({ type: 'DECREASE', data : 1 });
	};


	return (
		<div>
			<h1>count : {count}</h1>
			<input value={data} onChange={getData} type="text"/>&nbsp;&nbsp;
			<button onClick={() => addData(data)}>추가</button>
			<br />
			<br />
			<button onClick={onIncrease}>증가</button>&nbsp;&nbsp;&nbsp;&nbsp;
			<button onClick={onDecrease}>감소</button>
		</div>
	);
};

export default Page1;