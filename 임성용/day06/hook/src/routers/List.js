import React, { useState, useEffect } from 'react';
import Items from '../json/fishes.json';
import './List.css'

const itemStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '10px',
	margin: '50px auto',
	width: '800px'
};

const btnGrp = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '10px',
	margin: '50px auto',
	width: '800px',
	height: '100px'

}

const List = () => {
	const [list, setList] = useState([]);

	const onCheck = (id) => {
		// console.log(id);
		const after = list.map(item => 
			id === item.id ? ({ ...item, check: !item.check }) : item
		);

		setList(after);
	};

	const checkAll = () => {
		const after = list.map(item => 
			({ ...item, check: !item.check })
		);

		setList(after);
	}

	useEffect(() => {
		setList(Items);
	}, []);

	return (
		<div className="container">
			<div style={btnGrp}>
				<button onClick={() => checkAll()}>전체선택</button>
			</div>
			<div className="list" style={itemStyle}>
				{list.map(item => (
					<div className="item">
						<span 
							className={`checkbox ${item.check ? 'checked' : ''}`}
							onClick={() => onCheck(item.id)}>
						</span>
						<img src={item.src} style={{width: '100%'}} alt="" />
						<div className="name">{item.name}</div>
						<div className="price">{item.price}원</div>
					</div>
				))}
			</div>
		</div>
	);
};


export default List;