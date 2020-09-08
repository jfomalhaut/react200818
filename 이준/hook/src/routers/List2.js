import React, { useState, useRef, useEffect } from 'react';
import './List2.css';
import Card from '../components/Card';
import useInput from '../customs/useInput';

const List2 = () => {
	const [phoneBook, setPhoneBook] = useState([]);
	const [focus, setFocus] = useState(false);
	const nameRef = useRef();
	
	//useInputs
	const [name, setName] = useInput("");
	const [age, setAge] = useInput("");
	const [phone, setPhone] = useInput("");

	// const onChangeName = ev => {
	// 	const { target: { value } } = ev;
	// 	setName(value);
	// };

	// const onChangeAge = ev => {
	// 	const { target: { value } } = ev;
	// 	setAge(value);
	// };

	// const onChangePhone = ev => {
	// 	const { target: { value } } = ev;
	// 	setPhone(value);
	// };

	const addPhoneNumber = () => {
		if (name === '' || age === '' || phone === '') {
			alert('입력되지 않은 값이 있습니다');
			return;
		}

		const data = { name, age, phone };
		const after = phoneBook.concat(data).reverse();
		setPhoneBook(after);
		setName("");
		setAge("");
		setPhone("");
		nameFocusing();
	};

	const nameFocusing = () => {
		if (!focus) {
			nameRef.current.focus();
		}
	};

	const remove = index => {
		const after = phoneBook.filter((item, idx) => {
			if (index !== idx) {
				return item;
			}
		});
		setPhoneBook(after);
	};

	useEffect(() => {
		// console.log(focus);
	}, [focus]);

	useEffect(() => {
		// nameFocusing();
		// window.addEventListener('keypress', nameFocusing);
		// return () => {
		// 	window.removeEventListener('keypress', nameFocusing);
		// }
	}, []);

	return (
		<div className="container">
			<div className="field">
				<div>
					<input onFocus={() => setFocus(true)} value={name} ref={nameRef} onChange={setName} placeholder="name" />
				</div>
				<div>
					<input onFocus={() => setFocus(true)} value={age} onChange={setAge} placeholder="age" />
				</div>
				<div>
					<input onFocus={() => setFocus(true)} value={phone} onChange={setPhone} placeholder="phoneNumber" />
				</div>
				<button onClick={addPhoneNumber}>입력..</button>
			</div>
			<div className="list">
				{phoneBook.map((item, index) => (
					<Card item={item} index={index} remove={remove} />
				))}
			</div>
		</div>
	)
};

export default List2;