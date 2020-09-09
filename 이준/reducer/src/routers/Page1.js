import React, { useReducer, useState } from 'react';

const reducer = (state, { type, data, add }) => {
	switch (type) {
		case 'INCREASE': {
			return state + data;
		}
		case 'DECREASE': {
			return state - 1;
		}
		case 'ADD_NUMBER': {
			return state + add;
		}
		default: {
			return state;
		}
	}
};

const Page1 = () => {
	const [count, dispatch] = useReducer(reducer, 0);
	const [add, setAdd] = useState("");

	const onChangeAdd = ev => {
		const { target: { value } } = ev;
		setAdd(value);
	};

	const addNumber = () => {
		dispatch({ type: 'ADD_NUMBER', add: add * 1});
		setAdd("");
	};
	
	const onIncrease = () => {
		dispatch({ type: 'INCREASE', data: 200 });
	};

	return (
		<div>
			<h1>count : {count}</h1>
			<input value={add} onChange={onChangeAdd} />
			<button onClick={addNumber}>입력한값추가</button>
			<button onClick={onIncrease}>increase</button>
		</div>
	);
};

export default Page1;