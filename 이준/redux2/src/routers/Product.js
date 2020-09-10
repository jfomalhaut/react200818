import React, { useState, useEffect, useReducer } from 'react';
import LIST from '../jsons/fishes.json';
import { GoCheck } from 'react-icons/go';

const reducer = (state, { type, id }) => {
	switch (type) {
		case 'REMOVE_ALL': {
			return [];
		}
		case 'REMOVE_CHECK': {
			return state.filter(item => !item.check);
		}
		case 'REMOVE': {
			return state.filter(item => item.id !== id);
		}
		case 'CHECK_ALL': {
			const check = state.some(item => !item.check);
			return state.map(item => ({ ...item, check }));
		}
		case 'ON_CHECK': {
			return state.map(item => item.id === id ? ({...item, check: !item.check }) : item);
		}
		default: {
			return state;
		}
	}
};

const Product = () => {
	const [list, dispatch] = useReducer(reducer, LIST);
	
	const checkAll = () => {
		dispatch({ type: 'CHECK_ALL'});
	};
	
	const removeCheck = () => {
		dispatch({ type: 'REMOVE_CHECK'});
	};
	
	const removeAll = () => {
		dispatch({ type: 'REMOVE_ALL'});
	};
	
	const remove = id => {
		dispatch({ type: 'REMOVE', id });
	};
	
	const onCheck = id => {
		dispatch({ type: 'ON_CHECK', id });
	};


	return (
		<div className="container">
			<div className="options">
				<button onClick={checkAll}>전체선택</button>
				<button onClick={removeCheck}>선택삭제</button>
				<button onClick={removeAll}>전체삭제</button>
			</div>
			<div className="list">
				{list.map(item => (
					<div className="item">
						<div className="img">
							<img src={item.src} />
						</div>
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="price">{item.price}원</div>
							<button className="delete" onClick={() => remove(item.id)}>삭제</button>
							<button className="delete">담기</button>
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

export default Product;