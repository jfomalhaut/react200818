import React, { useState, useEffect } from 'react';
import LIST from '../jsons/fishes.json';
import { GoCheck } from 'react-icons/go';

const Product = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		setList(LIST);
	}, []);

	return (
		<div className="container">
			<div className="options">
				<button>전체선택</button>
				<button>선택삭제</button>
				<button>전체삭제</button>
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
							<button>삭제</button>
							<button>담기</button>
						</div>
						<div className="checkbox">
							<span className={item.check ? 'active' : ''}>
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