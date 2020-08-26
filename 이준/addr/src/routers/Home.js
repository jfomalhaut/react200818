import React from 'react';
const JUSO_APIKEY = process.env.JUSO_APIKEY;
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";

const Home = () => {
	console.log(JUSO_APIKEY);
	return (
		<h1>Home Component</h1>
	);
};

export default Home;