import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Home.css';

const JUSO_APIKEY = process.env.JUSO_APIKEY;
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const VIEW = 10;

const Home = () => {
	const [keyword, setKeyword] = useState("");
	const [total, setTotal] = useState(0);
	const [jusoList, setJusoList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeKeyword = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const search = () => {
		if (keyword === '') {
			alert("insert keyword...");
			return;
		}
		onSearch(1);
		setCurrentPage(1);
	};

	const onSearch = (curPg) => {
		console.log(curPg);
		Axios.get(`${REQUEST_URL}?confmKey=${JUSO_APIKEY}&currentPage=${curPg}&countPerPage=${VIEW}&resultType=json&keyword=${keyword}`).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setTotal(totalCount);
			setJusoList(juso);
		});
	};

	const onKeyPressKeyword = ev => {
		if (ev.key === 'Enter') {
			search();
		}
	};

	const prev = () => {
		setCurrentPage(currentPage - 1);
	};

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		if (keyword !== '') {
			onSearch(currentPage);
		}
	}, [currentPage]);




	// useEffect(() => {
	// 	window.addEventListener('scroll', onScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', onScroll);
	// 	}
	// }, []);

	return (
		<div className="container">
			<input value={keyword} onChange={onChangeKeyword} onKeyPress={onKeyPressKeyword} />
			<button onClick={search}>검색</button>
			<h1>'{keyword}'에 대한 검색 결과</h1>
			<h1 style={{ color: 'red'}}>TOTAL: {total}개</h1>
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
			{currentPage !== 1 ? (
				<button onClick={prev}>이전</button>
			) : null}
			{total > (VIEW * currentPage) ? (
				<button onClick={next}>다음</button>
			) : null}
		</div>
	);
};

export default Home;