import React, { useReducer, useState } from 'react'

const reducer = (state, { type, number }) => {
    switch (type) {
        case 'INCREASE': {
            return state + 1;
        }
        case 'DECREASE': {
            return state - 1; 
        }
        case 'ADD': {
            return state + number;
        }
        default: {
            return state;
        }

    }
};

const Page1 = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    const [price, setPrice] =  useState("");

    const addNumber = ev => {
        const { target: { value } } = ev;
        setPrice(value);
    };
    
    const onIncrease = () => {
        dispatch({ type: 'INCREASE' });
    };
    const onDecrease = () => {
        dispatch({ type: 'DECREASE'});
    };

    const add = () => {
        dispatch({ type: 'ADD', number: price * 1});
        setPrice("");
    };

    
    
    return (
        <div>
            <input value={price} onChange={addNumber} />
            <button onClick={add}>추가</button>
            <h1>count : {count}</h1>
            <button onClick={onIncrease}>increase</button>
            <button onClick={onDecrease}>decrease</button>
        </div>
    );
};

export default Page1;