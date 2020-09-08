import React from 'react'
import { useDispatch } from 'react-redux';

const Page1 = () => {
    const dispatch = useDispatch();

    const increase = () => {
        dispatch({ type: 'increase'});
    };
    return (
        <div>
            <button onClick={increase}>increase</button>
        </div>
    );
};

export default Page1;