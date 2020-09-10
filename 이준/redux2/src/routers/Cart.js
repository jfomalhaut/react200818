import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cart = useSelector(res => res);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<div>
			{cart.map(item => (
				<img src={item.src}/>
			))}
		</div>
	);
};

export default Cart;