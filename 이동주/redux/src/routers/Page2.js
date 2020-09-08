import React from 'react'
import { useDispatch } from 'react-redux';

const Page2 = () => {
    const dispatch = useDispatch();

    const decrease = () => {
        dispatch({ type: 'decrease'});
    };
    return (
        <div>
            <button onClick={decrease}>decrease</button>
        </div>
    );
};

export default Page2;