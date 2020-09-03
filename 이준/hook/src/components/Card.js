import React from 'react';

const Card = ({ item: { name, age, phone }, index, remove }) => {
	return (
		<div className="item">
			<div>{name}</div>
			<div>{age}</div>
			<div>{phone}</div>
			<button onClick={() => remove(index)}>삭제</button>
		</div>
	);
};

export default Card;