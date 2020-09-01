import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const CONFIRM_KEY = process.env.CONFIRM_KEY;
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const VIEW = 10;
const json = [];

const Home2 = () => {
	const [keyword, setKeyword] = useState("");
	const [keyword2, setKeyword2] = useState("");
	const [total, setTotal] = useState(0);
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeKeyword = ev => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const search = () => {
		const url = `${REQUEST_URL}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${keyword2}`;
		Axios.get(url).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setTotal(totalCount * 1);
			setList(juso);
		})
	};

	const onEnter = ev => {
		// console.log(ev.keyCode === 13이 Enterkey);
		if (ev.key === 'Enter') {
			setKeyword2(keyword);
		}
	};

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

	
	return (
		<div className="container">
			<input value={keyword} onChange={onChangeKeyword} onKeyDown={onEnter} />
			<button onClick={() => setKeyword2(keyword)}>검색</button>
			<>
			{keyword2 === '' ? (
				<h1>검색어를 입력해주세요..</h1>
			) : (
				<h1><span style={{ color: 'blue' }}>'{keyword2}'</span>에 대한 검색 결과 ({total}개)</h1>
			)}
			</>
			<div className="list" style={{width: '600px'}}>
				{list.map((item, index) => (
					<div className="row" style={{padding: '10px', borderBottom: '1px solid #ddd'}} key={`ADDR${index}`}>
						<div>[도로명] {item.roadAddrPart1}</div>
						<div>[지번] {item.jibunAddr}</div>
					</div>
				))}
			</div>

			{currentPage !== 1 ? (
				<button onClick={() => setCurrentPage(currentPage - 1)}>이전페이지</button>
			) : null}

			{total > (VIEW * currentPage) ? (
				<button onClick={() => setCurrentPage(currentPage + 1)}>다음페이지</button>
			) : null}
		</div>
	);
};

export default Home2;