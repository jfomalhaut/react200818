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

    const checkAll = (id) => {
        const after = list.concat(item =>
            id === item.id ? ({...item, check: item.check }) : item
        );
        setList(after);
    };
    
    useEffect(() => {
        setList(Items);
    }, []);
    
    return  (
        <div className="container">
            <button onClick={checkAll}>전체선택</button>
            <div className="list" style={itemStyle}>
                {list.map(item => (
                <div className="item">
                    <span 
                    className={`checkbox ${item.check ? 'checked' : ''}`}
                    onClick={() => onCheck(item.id)} />
                    <img src={item.src} style={{width: '100%'}} />
                    <div className="name">{item.name}</div>
                    <div className="price">{item.price}원</div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default List;