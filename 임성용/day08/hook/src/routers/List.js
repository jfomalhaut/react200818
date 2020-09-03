import React, { useState, useEffect } from 'react';
import Items from '../jsons/fishes.json';
import './List.css';

const itemStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '25px',
	margin: '50px auto',
	width: '800px'
};

const List = () => {
	const [list, setList] = useState([]);

	const onCheck = (id) => {
		const after = list.map(item => id === item.id ? ({ ...item, check: !item.check }) : item );

		setList(after);
	};

	const onCheck2 = (id) => {
		const after = list.map(item => {
			if (id === item.id) {
				return ({ ...item, check: !item.check });
			} else {
				return item;
			}
		});

		setList(after);
	};

	const checkAll = () => {
		const result = list.some(item => !item.check);
		const after = list.map(item => ({ ...item, check: result }));
		setList(after);
	};

	const removAll = () => {
		// const after = list.filter(item => false);
		// setList(after);
		setList([]);
	};

	const removCheck = () => {
		const after = list.filter(item => item.check === false);
		setList(after);
	};

	const itemDel = (id) => {
		const after = list.filter(item => id !== item.id);
		setList(after);
	};

	const recovery = () => {
		setList(Items);
	}

	useEffect(() => {
		setList(Items);
	}, []);

	return (
		<div className="container">
			<button onClick={checkAll}>전체선택</button>
			<button onClick={removAll}>전체삭제</button>
			<button onClick={removCheck}>선택삭제</button>
			<button onClick={recovery}>상품복원</button>
			<div className="list" style={itemStyle}>
				{list.map(item => (
					<div className="item" key={`ITEM${item.id}`}>
						<span 
							className={`checkbox ${item.check ? 'checked' : ''}`} 
							onClick={() => onCheck2(item.id)} />
						<img src={item.src} style={{width: '100%'}} onClick={() => onCheck2(item.id)} />
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="price">{item.price}원</div>
						</div>
						<button onClick={() => itemDel(item.id)}>삭제</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;