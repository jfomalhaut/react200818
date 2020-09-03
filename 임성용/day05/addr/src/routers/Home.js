import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const TEST = 'http://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIwMDgyNjE0MjMyMzExMDEwNzY=&currentPage=1&countPerPage=10&keyword=%EC%97%AD%EC%82%BC%EB%A1%9C%20215&resultType=json';
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const JUSO_APIKEY = process.env.JUSO_APIKEY;
const VIEW = 10;

const Home = () => {

	const [keyword, setKeyword] = useState("");
	const [total, setTotal] = useState(0);
	const [jusoList, setJusoList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeKeyword = (ev) => {
	const { target: {value} } = ev;
	setKeyword(value);

	};

	const search = () => {
		if (keyword === '') {
			return;
		}
		onSearch();
	};

	const onSearch = () => {
		Axios.get(`${REQUEST_URL}?confmKey=${JUSO_APIKEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${keyword}`).then(res => {
			const { data: { results: {common: { totalCount }, juso } } } = res;
			setTotal(totalCount);
			setJusoList(juso);
		});

	}

	const appKeyPress = (e) => {

		if (e.key === 'Enter' && keyword) {
			search();
		}

	}

	const prev = () => {
		setCurrentPage(currentPage - 1);
	};

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		if (keyword !== '') {
			onSearch('');
		}
	}, [currentPage]);

	// 1. 검색 비어있을 때 안되게
	// 2. 검색 완료 후 keyword reset
	// 3. 이전버튼 다음버튼 만들기(current page 바뀌게)
	// 물론 1페이지 일 때, 마지막 페이지 때는 각각 버튼이 작동하지 않음

	return (
		<div className="container">
			<input value={keyword} onChange={onChangeKeyword} onKeyPress={appKeyPress}/>
			<button onClick={search}>검색</button>
			<h1>keyword value: {keyword}</h1>
			<h1 style={{color: 'red'}}>TOTAL : {total} 개</h1>
			<div className="jusoList">
				{jusoList.map((item, index) => (
					<div className="item" key={`JUSO${index}`}>
						<div className="zipNo">{item.zipNo}</div>
						<div className="juso">
							<div className="road">{item.roadAddrPart1}</div>
							<div className="jibun">{item.jibunAddr}</div>
						</div>
					</div>
				))}
			</div>
			<button onClick={prev}>이전</button>
			<button onClick={next}>다음</button>
		</div>
			
	);
};

export default Home;