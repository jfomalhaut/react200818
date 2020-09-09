import React, { useState } from 'react';

const useInput = (initialValue) => {
	const [data, setData] = useState(initialValue);
	const onChange = ev => {
		const { target: { value } } = ev;
		if (value) {
			setData(value);
		} else {
			setData("");
		}
	};
	return [data, onChange];
};

const Input = () => {
	const [password, setPassword] = useState("");

	const onChangePassword = ev => {
		const { target: { value } } = ev;
		setPassword(value);
	};

	return (
		<div>
			<input value={password} onChange={onChangePassword}/>
			<h1>{password}</h1>
			<button onClick={() => console.log(password)}>내가 입력한 내용은?</button>
		</div>
	);
};

export default Input;