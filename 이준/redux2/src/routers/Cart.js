import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cart = useSelector(({ CartReducer }) => CartReducer);

	return (
		<div className="container">
			<div className="list">
				{cart.map(item => (
					<div className="item">
						<div className="img">
							<img src={item.src}/>
						</div>
						<div className="info">
							<div className="name">{item.name}</div>
							<div className="price">{item.price}</div>
							<div className="count">{item.count}개</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cart;