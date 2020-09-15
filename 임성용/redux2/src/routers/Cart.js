import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from  'react-router-dom';
import { delCart } from '../reducer/CartReducer';


const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(({ CartReducer }) => CartReducer);

	useEffect(() => {
		console.log(cart);

	}, [cart]);

	const onDelCart = (id) => {
		// dispatch({ type: 'DEL_CART', id : item.id });
		dispatch(delCart(id));
	};

	return (
		<div className="container">
			{cart.map((item, index) => (
				<div className="item" key={`ITEM${index}`}>
					<div className="img">
						<img src={item.src} />
					</div>
					<div className="info">
						<div className="name">{item.name}</div>
						<div className="price">{item.price}원</div>
						<button onClick={() => onDelCart(item.id)}>빼기</button>
					</div>
					<div>
						<Link to="/detail">상세보기</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;