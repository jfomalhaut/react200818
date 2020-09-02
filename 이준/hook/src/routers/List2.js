import React, { useState, useEffect } from 'react';
import './List2.css';

const List2 = () => {
	const [phoneBook, setPhoneBook] = useState([]);

	useEffect(() => {
		const data = {
			name: '이름이',
			age: 22,
			phone: '010-3412-1212'
		};
		const after = phoneBook.concat(data);
		setPhoneBook(after);
	}, []);
	return (
		<div className="container">
			<div className="field">
				<div>
					<input placeholder="name" />
				</div>
				<div>
					<input placeholder="age" />
				</div>
				<div>
					<input placeholder="phoneNumber" />
				</div>
				<button>입력..</button>
			</div>
			<div className="list">
				{phoneBook.map(item => (
					<div className="item">
						<div>{item.name}</div>
						<div>{item.age}</div>
						<div>{item.phone}</div>
					</div>
				))}
			</div>
		</div>
	)
};

export default List2;