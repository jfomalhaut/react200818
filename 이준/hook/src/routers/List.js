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

	useEffect(() => {
		setList(Items);
	}, []);

	return (
		<div className="container">
			<button onClick={checkAll}>전체선택</button>
			<div className="list" style={itemStyle}>
				{list.map(item => (
					<div className="item">
						<span 
							className={`checkbox ${item.check ? 'checked' : ''}`} 
							onClick={() => onCheck2(item.id)} />
						<img src={item.src} style={{width: '100%'}} onClick={() => onCheck2(item.id)} />
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="price">{item.price}원</div>
						</div>
						<button>삭제</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default List;