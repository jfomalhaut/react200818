import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [data, setData] = useState(8);

    const increase = () => {
        setData(data + 1);
    };

    const decrease = () => {
        setData(data - 1);
    };

    useEffect(() => {
        if(data % 10 === 0){
            alert('경고입니다.');
        }
    }, [data]);

    useEffect(() => {
        console.log('sjfoiejfwoijef'); //화면이 처음 실행되었을 때, 쓰는 것이다.

    }, []);
    
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
        </div>
    );
};

export default Home;