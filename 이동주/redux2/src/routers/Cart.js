import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(res => res);

    useEffect(() => {
        console.log(cart);
    }, [cart]);
    return (
        <h1>Cart</h1>
    );
}; 

export default Cart;