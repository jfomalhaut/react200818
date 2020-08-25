import React from 'react';

function List({ history }) { // history: 보낼 때, location: 현재위치, match: 받을 때
	
	const goMain = (player = 'messi') => {
		history.push('main/' + player);
	};
	
	return (
		<div>
			<h1>List Page</h1>
			<button onClick={() => goMain('Messi')}>Messi 보내기</button>
			<button onClick={() => goMain('Son')}>Son 보내기</button>
			<button onClick={() => goMain('Park')}>Park 보내기</button>
			<button onClick={() => goMain('Cha')}>Cha 보내기</button>
			<button onClick={() => goMain('Lee')}>Lee 보내기</button>
			<button onClick={() => goMain()}>undefined 보내기</button>
		</div>
	);
};

export default List;