import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import LIST from '../jsons/fishes.json';
import { GoCheck } from 'react-icons/go';
import { addCart } from '../reducer/CartReducer';


const List = () => {
	const dispatch = useDispatch();
	const [list, setList] = useState(LIST);

	const selectAll = () => {
		const check = list.some(item => !item.check);
		const after = list.map(item => ({ ...item, check }));
		setList(after);
	};

	const onCheck = id => {
		const after = list.map(item => item.id === id ? ({ ...item, check: !item.check }) : item);
		setList(after);
	};

	const onAddCart = (item) => {
		// dispatch({ type: 'ADD_CART',  item });
		dispatch(addCart(item));
	};

	const selectCart = () => {
		dispatch({ type: 'SEL_CART',  list });
	};

	return (
		<div className="container">
			<div className="options">
				<button onClick={selectAll}>전체선택</button>
				<button onClick={selectCart}>선택담기</button>
			</div>
			<div className="list">
				{list.map(item => (
					<div className="item" key={`ITEM${item.id}`}>
						<div className="img">
							<img src={item.src} />
						</div>
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="price">{item.price}원</div>
							<button onClick={() => onAddCart(item)}>담기</button>
						</div>
						<div className="checkbox">
							<span className={item.check ? 'active' : ''} onClick={() => onCheck(item.id)}>
								<GoCheck />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;