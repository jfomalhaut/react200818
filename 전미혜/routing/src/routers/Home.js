import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
 
    const [data, setData] = useState(8);
         //바꿀값, 함수

    const increase = () => {
        console.log("증가");
        setData(data + 1);
    };

    const decrease = () => {
        console.log("감소");
        setData(data - 1);
    };

    useEffect(() => {
        console.log('Chanhge!');
        if(data % 10 === 0) {
            alert("10의 배수로 가감됨");
        }
    }, [data]); // data가 바뀔 때 감지함

    useEffect(() => {
        console.log("화면을 처음 실행할 때 뜨는 것이다.");
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