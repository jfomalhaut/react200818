import React from 'react'

// const List = () => {
//     return (
//         <h1>LIST PAGE</h1>
//     );
// };


function List({ history }) { // history: 보낼 때, location: 현재 위치, match: 받을 때
    const goMain = (player) => {
        history.push('main/'+ player);
    };
    return (
        <div>
            <h1>List Page</h1>
            <button onClick={()=> goMain('Lebron')}>메인으로 르브론 보내기..</button>
            <button onClick={()=> goMain('Jordan')}>메인으로 조던 보내기..</button>
            <button onClick={()=> goMain('Doncic')}>메인으로 돈치치 보내기..</button>
        </div>
    );
};

export default List;