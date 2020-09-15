import React, { useState, useEffect } from 'react';
import ITEMS from '../jsons/items.json';
const nf = new Intl.NumberFormat();

const List = ({ match: { params: { category } } }) => {
	const [items, setItems] = useState([]);
	
	// category
	// 0 => all
	// 1 => fish
	// 2 => fruit
	// 3 => vegetable
	const transCategory = (cate) => {
		switch(cate) {
			case 'all': return 0;
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
		}
	};

	const transType = (type) => {
		switch(type) {
			case 1 : return '수산물';
			case 2 : return '청과';
			case 3 : return '야채';
		}
		// return '개구리' + type;
	};

	useEffect(() => {
		if (category === 'all') {
			setItems(ITEMS);
			return;
		}
		const type = transCategory(category);
		const temp = ITEMS.filter(item => item.type === type);
		// const temp = type === 0 ? ITEMS : ITEMS.filter(item => item.type === type);
		setItems(temp);
	}, [category]);

	return (
		<div className="container">
			<div className="items">
				{items.map(item => (
					<div className="item">
						<div className={`img color${item.type}`}></div>
						<div className="info">
							<div className="top">
								<span className="type border1">{transType(item.type)}</span>
								<span className="name">{item.name}</span>
							</div>
							<div className="price">{nf.format(item.price)}원</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;