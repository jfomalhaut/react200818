import React, { useState, useRef, useEffect } from 'react';
import './List2.css';

const List2 = () => {
	const [phoneBook, setPhoneBook] = useState([]);
	const [name, setName] =  useState("");
	const [age, setAge] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const nameRef = useRef();

	const onChangeName = (ev) => {
		const { target: { value } } = ev;
		setName(value);
	};

	const onChangeAge = (ev) => {
		const { target: { value } } = ev;
		setAge(value);
	};

	const onChangeNumber = (ev) => {
		const { target: { value } } = ev;
		setPhoneNumber(value);
	};

	const addPhoneNumber = () => {
		if (name === '' || age === '' || phoneNumber === '' ) {
			alert("입력하세요");
			return;
		} 
		const data = {
			name,
			age,
			phone: phoneNumber 
		};
		const after = phoneBook.concat(data).reverse();
		setPhoneBook(after);
		setName("");
		setAge("");
		setPhoneNumber("");
		nameFocusing();
	};

	const remove = index => {
		const after = phoneBook.filter((item, idx) => index !== idx);
		setPhoneBook(after);
	};
	
	const enter = (ev) => {
		if( ev.key === 'Enter') {
            addPhoneNumber();
        } 
	};

	const nameFocusing = () => {
		nameRef.current.focus();
	};

	// useEffect (() => {
	// 	nameFocusing();
	// 	window.addEventListener('keypress', nameFocusing);
	// 	return () => {
	// 		window.removeEventListener('keypress', nameFocusing);
	// 	}
	// }, []);

	return (
		<div className="container">
			<div className="field">
				<div>
					<input value={name} ref={nameRef} onChange={onChangeName}  placeholder="name" />
				</div>
				<div>
					<input value={age} onChange={onChangeAge} placeholder="age" />
				</div>
				<div>
					<input value={phoneNumber} onChange={onChangeNumber} onKeyDown={enter} placeholder="phoneNumber" />
				</div>
				<button onClick={addPhoneNumber}>입력</button>
			</div>
			<div className="list">
				{phoneBook.map((item, index) => (
					<div className="item">
						<div>{item.name}</div>
						<div>{item.age}</div>
						<div>{item.phone}</div>
						<button onClick={() => remove(index)}>삭제</button>
					</div>
				))}
			</div>
		</div>
	)
};

export default List2;