import React, { useState } from 'react';
import LIST from '../jsons/fishes.json';
import { GoCheck } from 'react-icons/go';
import { useDispatch } from 'react-redux';

const List = () => {
    const dispatch = useDispatch();
    const [list, setList] = useState(LIST);

    const checkAll = () => {
        const check = list.some(item => !item.check);
        const after = list.map(item => ({...item, check}));
        setList(after);
    };

    const checkAdd = () => {
        
    };

    const addCart = item => {
        dispatch({type: 'ADD_CART', item });
    };

    const onCheck = () => {
        const after = list.map(item => item.id === id ? ({...item, check: !item.check }) : item);
        setList(after);
    };
    return (
        <div className="container">
            <div className="options">
                <button onClick={checkAll}>전체선택</button>
                <button onClick={checkAdd}>선택담기</button>
            </div>
            <div className="list">
                {list.map(item => (
                    <div className="item" key={`ITEM${item.id}`}>
                        <div className="img">
                            <img src={item.src} />
                        </div>
                        <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}</div>
                            <button className="add" onClick={() => addCart(item) }>담기</button>
                        </div>
                        <div className="checkbox">
                            <span className={item.check ? 'active' : ''} onClick={() => onCheck(item.id)} >
                                <GoCheck />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List