import React, { useState, useEffect } from 'react';
import './Home.css';


const value = 7;

const Home = () => {
    const [data, setData] = useState(8); // let은 덮어쓰기 가능 
    
    const increase = () => {
        setData(data + 1);
    };
    
    const decrease = () => {
        setData(data - 1);
    };
    
    useEffect(() => {
        if (data % value === 0) {
            console.log(`${value}배수입니다.`);
        }    
    }, [data]);

    useEffect(() => {
        alert('배고파'); //화면 처음 실행할 때 나옴 
    }, []);

    return(
        <div>
            <h1>장바구니 :{data}</h1>
            <button onClick={() => increase(13)}>증가</button>
            <button onClick={decrease}>감소</button>
        </div>
        
    );
};

export default Home;