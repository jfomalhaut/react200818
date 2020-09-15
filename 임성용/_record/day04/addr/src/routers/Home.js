import React, { useState, useEffect } from 'react';

const JUSO_APIKEY = process.env.JUSO_APIKEY;
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
// http://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIwMDgyNjE0MjMyMzExMDEwNzY=&currentPage=1&countPerPage=10&keyword=%EC%97%AD%EC%82%BC%EB%A1%9C%20215&resultType=json

const Home = () => {
	console.log(JUSO_APIKEY);
	return (
		<h1>Home Home Home</h1>
	);
};

export default Home;