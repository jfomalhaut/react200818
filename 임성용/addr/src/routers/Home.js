import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// const TEST = 'http://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIwMDgyNjE0MjMyMzExMDEwNzY=&currentPage=1&countPerPage=10&keyword=%EC%97%AD%EC%82%BC%EB%A1%9C%20215&resultType=json';
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const JUSO_APIKEY = process.env.JUSO_APIKEY;
const VIEW = 10;
const json = [];

const Home = () => {

	const [keyword, setKeyword] = useState("");
	const [keyword2, setKeyword2] = useState("");
	const [total, setTotal] = useState(0);
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeKeyword = (ev) => {
		const { target: {value} } = ev;
		setKeyword(value);
	};

	const search = () => {console.log('search');
		if (keyword === '') {
			alert('입력바람 !!');
			return;
		}
		onSearch(currentPage);
		setCurrentPage(currentPage);
	};

	const onSearch = (currentPage) => {
		Axios.get(`${REQUEST_URL}?confmKey=${JUSO_APIKEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${keyword}`).then(res => {
			const { data: { results: {common: { totalCount }, juso } } } = res;
			setTotal(totalCount * 1);
			setList(juso);
		});

	}

	const appKeyPress = (e) => {

		if (e.key === 'Enter' && keyword) {
			// search();
			setKeyword2(keyword);
		}

	}

	// const prev = () => {
	// 	setCurrentPage(currentPage - 1);
	// };

	// const next = () => {
	// 	setCurrentPage(currentPage + 1);
	// };

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [keyword2]);

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [currentPage]);

	// 1. 검색 비어있을 때 안되게
	// 2. 검색 완료 후 keyword reset
	// 3. 이전버튼 다음버튼 만들기(current page 바뀌게)
	// 물론 1페이지 일 때, 마지막 페이지 때는 각각 버튼이 작동하지 않음

	return (
		<div className="container">
			<input value={keyword} onChange={onChangeKeyword} onKeyPress={appKeyPress}/>
			<button onClick={() => setKeyword2(keyword)}>검색</button>
			<div>
			{keyword2 === '' ? (
				<h1>검색어를 입력해주세요..</h1>
			) : (
				<h1><span style={{ color: 'blue' }}>'{keyword2}'</span>에 대한 검색 결과 ({total}개)</h1>
			)}
			</div>
			<div className="list" style={{width: '600px'}}>
				{list.map((item, index) => (
					<div className="row" style={{padding: '10px', borderBottom: '1px solid #ddd'}} key={`ADDR${index}`}>
						<div>[도로명] {item.roadAddrPart1}</div>
						<div>[지번] {item.jibunAddr}</div>
					</div>
				))}
			</div>

			{currentPage !== 1 ? (
				<button onClick={() => setCurrentPage(currentPage - 1)}>이전 페이지</button>
				// <button onClick={prev}>이전</button>
			) : null}

			{total > (VIEW * currentPage) ? (
				<button onClick={() => setCurrentPage(currentPage + 1)}>다음 페이지</button>
				// <button onClick={next}>다음</button>
			) : null}
		</div>
			
	);
};

export default Home;




