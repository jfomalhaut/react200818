import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from  'react-router-dom';

const Cart = () => {
	const cart = useSelector(res => res);

	useEffect(() => {
		console.log(cart);

	}, [cart]);

	return (
		<div>
			{cart.map((item, index) => (
				<div className="item" key={`ITEM${index}`}>
					<div className="img">
						<img src={item.src} />
					</div>
					<div className="info">
						<div className="name">{item.name}</div>
						<div className="price">{item.price}원</div>
						<Link to="/detail">상세보기</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;