import React, { useState, useEffect } from 'react';
import './List2.css';

const List2 = () => {
	const [phoneBook, setPhoneBook] = useState([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const onChangeName = (ev) => {
		const { target: {value} } = ev;
		setName(value);
	};

	const onChangeAge = (ev) => {
		const { target: {value} } = ev;
		setAge(value);
	};

	const onChangePhoneNumber = (ev) => {
		const { target: {value} } = ev;
		setPhoneNumber(value);
	};

	const addItem = () => {
		if (name && age && phoneNumber) {
			const data = {
				name: name,
				age: age,
				phone: phoneNumber
			};
			const after = phoneBook.concat(data);
			setPhoneBook(after);

			setName('');
			setAge('');
			setPhoneNumber('');
		} else {
			alert('값을 입력해주세요');
		}
	};

	const appKeyPress = (e) => {
		if (e.key === 'Enter') {
			addItem();
		}
	};

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
					<input value={name} onChange={onChangeName} onKeyPress={appKeyPress} placeholder="name" />
				</div>
				<div>
					<input value={age} onChange={onChangeAge} onKeyPress={appKeyPress} placeholder="age" />
				</div>
				<div>
					<input value={phoneNumber} onChange={onChangePhoneNumber} onKeyPress={appKeyPress} placeholder="phoneNumber" />
				</div>
				<button className="btn" onClick={addItem}>입력</button>
			</div>
			<div className="list">
				{phoneBook.map((item, index) => (
					<div className="item" key={`ITEM${index}`}>
						<div>이름 : {item.name}</div>
						<div>나이 : {item.age}</div>
						<div>폰넘 : {item.phone}</div>
						<br/>
					</div>
				))}
			</div>
		</div>
	)
};

export default List2;