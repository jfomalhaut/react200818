import React from 'react';

// const List = () => {
// 	return (
// 		<h1>List Page</h1>
// 	);
// };

function List(props) { // history 보낼 때, location 현재위치, match 받을 때
	console.log(props);

	const goMain = (player = 'messi') =>{
		console.log(player);
		// props.history.push('main/messi');
		props.history.push('main/' + player);
	}

	return (
		<div>
			<h1>List Page</h1>
			<button onClick={goMain}>메인으로 메시보내기..</button>
			<button onClick={() => goMain('a')}>메인으로 a 선수 보내기..</button>
			<button onClick={() => goMain('b')}>메인으로 b 선수 보내기..</button>
			<button onClick={() => goMain('c')}>메인으로 c 선수 보내기..</button>
			<button onClick={() => goMain()}>default.</button>
		</div>
	);
};

export default List;