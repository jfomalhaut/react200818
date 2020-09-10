import React, { useState, useEffect, useReducer } from 'react';
import LIST from '../jsons/fishes.json';
import { GoCheck } from 'react-icons/go';

const reducer = (state, {type, id}) => {
    switch (type){
        case 'REMOVE_ALL': {
            return [];
        }

        case 'REMOVE': {
            return state.filter(item => id !== item.id);
        }

        case 'ADD': {
            return state.filter(item => id === item.id);
        }

        case 'ON_CHECK': {
            return state.map(item => id === item.id ?({...item, check: !item.check }) : item );
        }

        case 'CHECK_ALL': {
           const check = state.some(item => !item.check);
           return state.map(item => ({...item, check }));
        }

        case 'REMOVE_CHECK': {
            return state.filter(item => !item.check);
        }
        
        default: {
            return state;
        }
    }
};

const Product = () => {
    const [list, dispatch] = useReducer(reducer, LIST);
    // const [list, setList] = useState([]);

    // const onCheck = (id) => {
    //     const after = list.map(item =>
    //         id === item.id ? ({...item, check: !item.check }) : item    
    //     );

    //     setList(after);
    // };

    // const remove = (id) => {
    //     const after = list.filter(item => id !== item.id);
    //     setList(after);
    // };

    // const add = (id) => {
    //     const after = list.filter(item => id === item.id);
    //     setList(after);
    // };

    // const checkAll = () => {
    //     const result = list.some(item => !item.check);
    //     const after = list.map(item => ({...item, check: result }));
    //     setList(after);
    // };

    // const removeAll = () => {
    //     setList([]);
    // };

    // const removeCheck = () => {
    //     const after = list.filter(item => !item.check);
    //     setList(after);
    // };

    const remove2 = (id) => {
        dispatch({type: 'REMOVE', id});   
    };

    const add2 = (id) => {
        dispatch({type: 'ADD', id});
    };

    const onCheck2 = (id) => {
        dispatch({type: 'ON_CHECK', id});   
    };
    
    const removeAll2 = () => {
        dispatch({type: 'REMOVE_ALL'});   
    };

    const checkAll2 = () => {
        dispatch({type: 'CHECK_ALL'});   
    };

    const removeCheck2 = () => {
        dispatch({type: 'REMOVE_CHECK'});   
    };

    

   

   
    // useEffect(() => {
    //     setList(LIST);
    // }, []);
    return (
        <div className="container">
            <div className="options">
                <button onClick={checkAll2}>전체선택</button>
                <button onClick={removeCheck2}>선택삭제</button>
                <button onClick={removeAll2}>전체삭제</button>
            </div>
            <div className="list">
                {list.map(item => (
                    <div className="item">
                        <div className="img">
                            <img src={item.src} />
                        </div>
                        <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}</div>
                            <button className="delete" onClick={() => remove2(item.id)}>삭제</button>
                            <button className="add" onClick={() => add2(item.id) }>담기</button>
                        </div>
                        <div className="checkbox">
                            <span className={item.check ? 'active' : ''} onClick={() => onCheck2(item.id)} >
                                <GoCheck />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 

export default Product;