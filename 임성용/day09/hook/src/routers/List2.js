import React, { useState, useEffect, useRef } from 'react';
import './List2.css';
import useInput from '../coustoms/useInput';

const List2 = () => {
	const [phoneBook, setPhoneBook] = useState([]);
	const [name, setName] = useInput("");
	const [age, setAge] = useInput("");
	const [phoneNumber, setPhoneNumber] = useInput("");
	const nameRef = useRef();

	// const onChangeName = (ev) => {
	// 	const { target: {value} } = ev;
	// 	setName(value);
	// };

	// const onChangeAge = (ev) => {
	// 	const { target: {value} } = ev;
	// 	setAge(value);
	// };

	// const onChangePhoneNumber = (ev) => {
	// 	const { target: {value} } = ev;
	// 	setPhoneNumber(value);
	// };

	const addItem = () => {
		if (name && age && phoneNumber) {
			const data = {
				name: name,
				age: age,
				phone: phoneNumber
			};
			const after = phoneBook.concat(data).reverse();
			setPhoneBook(after);

			// setName('');
			// setAge('');
			// setPhoneNumber('');
			nameRef.current.focus();
		} else {
			alert('값을 입력해주세요');
		}
	};

	const appKeyPress = (e) => {
		if (e.key === 'Enter') {
			addItem();
		}
	};

	const delItem = index => {
		const after = phoneBook.filter((item, idx) => index !== idx);
		setPhoneBook(after);
	};

	useEffect(() => {
		nameRef.current.focus();
	}, []);

	// useEffect(() => {
	// 	const data = {
	// 		name: '이름이',
	// 		age: 22,
	// 		phone: '010-3412-1212'
	// 	};
	// 	const after = phoneBook.concat(data);
	// 	setPhoneBook(after);
	// }, []);

	return (
		<div className="container">
			<div className="field">
				<div>
					<input value={name} ref={nameRef} onChange={setName} onKeyPress={appKeyPress} placeholder="name" />
				</div>
				<div>
					<input value={age} onChange={setAge} onKeyPress={appKeyPress} placeholder="age" />
				</div>
				<div>
					<input value={phoneNumber} onChange={setPhoneNumber} onKeyPress={appKeyPress} placeholder="phoneNumber" />
				</div>
				<button className="btn" onClick={addItem}>입력</button>
			</div>
			<div className="list">
				{phoneBook.map((item, index) => (
					<div className="item" key={`ITEM${index}`}>
						<div>이름 : {item.name}</div>
						<div>나이 : {item.age}</div>
						<div>폰넘 : {item.phone}</div>
						<button className="" onClick={() => delItem(index)}>삭제</button>
						<br/>
						<br/>
					</div>
				))}
			</div>
		</div>
	)
};

export default List2;