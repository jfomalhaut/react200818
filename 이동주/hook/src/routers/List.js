import React, { useState, useEffect } from 'react'
import Items from '../jsons/fishes.json';
import './List.css';

const itemStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '10px',
    margin: '50px auto',
    width: '800px'
};

const List = () => {
    const [list, setList] = useState([]);

    const onCheck = (id) => {
        const after = list.map(item =>
            id === item.id ? ({...item, check: !item.check }) : item    
        );

        setList(after);
    };

    const checkAll = () => {
        const result = list.some(item => !item.check);
        const after = list.map(item => ({...item, check: result }));
        setList(after);
    };

    const remove = (id) => {
        const after = list.filter(item => id !== item.id);
        setList(after);
    };
    
    const removeAll = () => {
        setList([]);
    };

    const removeCheck = () => {
        const after = list.filter(item => !item.check);
        setList(after);
    };

    const recovery = () => {
        setList(Items);
    };
    
    useEffect(() => {
        setList(Items);
    }, []);
    
    return  (
        <div className="container">
            <button onClick={checkAll}>전체선택</button>
            <button onClick={removeAll}>전체삭제</button>
            <button onClick={removeCheck}>선택삭제</button>
            <button onClick={recovery}>상품복원</button>
            <div className="list" style={itemStyle}>
                {list.map(item => (
                <div className="item" key={`ITEM${item.id}`}>
                    <span 
                    className={`checkbox ${item.check ? 'checked' : ''}`}
                    onClick={() => onCheck(item.id)} />
                    <img src={item.src} style={{width: '100%'}} onClick={() => onCheck(item.id)} />
                    <div className="name">{item.name}</div>
                    <div className="price">{item.price}원</div>
                    <button onClick={() => remove(item.id)}>삭제</button>
                </div>
                ))}
            </div>
        </div>
    );
};

export default List;