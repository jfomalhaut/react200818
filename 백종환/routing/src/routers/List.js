import React from 'react';

const List = ({ history }) => { //history보낼때, location현재위치, match받을떄
    const goMain = (player) => {
        history.push(player);
    }
    return (
        <div>
            <h1>List Page</h1>
            <button onClick={() => goMain('main/messi')}>메시</button>
            <button onClick={() => goMain('main/zidan')}>지단</button>
            <button onClick={() => goMain('main/Lewandowski')}>레반도프스키</button>
        </div>
    );
};
export default List;