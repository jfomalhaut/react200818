import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartReducer from '../reducer/CartReducer';
import { remove } from '../reducer/CartReducer';
import { checkAll } from '../reducer/CartReducer';
import { removeAll } from '../reducer/CartReducer';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(({ CartReducer }) => CartReducer);
    
    const remove2 = (id) => {
        dispatch(remove(id));
    };
    
    const checkAll2 = () => {
        dispatch(checkAll());
    };

    const removeAll2 = () => {
        dispatch(removeAll());
    }
   
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    return (
        <div className="list">
            <button onClick={checkAll2}>전체선택</button>
            <button onClick={removeAll2}>전체삭제</button>
			{cart.map(item => (
            <div className="item">
                <div className="img">
                    <img src={item.src} />
                </div>
                <div className="name">
                    {item.name}
                </div>
                <button onClick={() => remove2(item.id)}>삭제</button>
            </div>
			))}
		</div>
    );
}; 

export default Cart;