import React from 'react';
import Home from './Home';

function Main() {
	const name = "리엑트";
	const title = "MAIN";
	return(
		<div>
			<h1>여기는 {title} Page 입니다</h1>
			<ul>
				<li className="bese">{name}</li>
				<li>menu2</li>
				<li>menu3</li>
				<li>menu4</li>
			</ul>
			<Home />
		</div>
	);
};

export default Main;