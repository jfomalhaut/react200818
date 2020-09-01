import React, { useState ,useEffect } from 'react';
import Axios from 'axios';


const JUSO_APIKEY = process.env.JUSO_APIKEY;
const REQUEST_URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const VIEW = 10;



const Home = () => {
    const [keyword, setKeyword] = useState("");
    const [total, setTotal] = useState(0);
    const [jusoList, setJusoList] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);

    const onChangeKeyword = (ev) => {
        const { target : { value } } = ev;
        setKeyword(value);
    };

    const search = () => {
        if (keyword === '') {
            alert('검색어를 입력하세요');
            return;
        }
       onSearch();
    };

    const onSearch = () => {
        Axios.get(`${REQUEST_URL}?confmKey=${JUSO_APIKEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${keyword}`).then(res => {
            const { data : { results: { common: { totalCount }, juso } } } = res;
            setTotal(totalCount);
            setJusoList(juso);
            // if (totalCount !== '0') {
            //     setKeyword('');
            // }
        });
    }

    const enter = (ev) => {
        if( ev.key === 'Enter') {
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
        if (keyword !== ''){
            onSearch();
        } 
    }, [currentPage]);
   
    return(
        <div className="container">
            <input value={keyword} onChange={onChangeKeyword} onKeyDown={enter} />
            <button onClick={search}>검색</button>
            <h1>keyword value: {keyword}</h1>
            <h1 style={{ color : 'red'}}>Total : {total}개</h1>
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
            <div className="btns">
                    <button onClick={prev}>이전</button>
                    <button onClick={next}>다음</button>
            </div>
        </div>
    );
};

export default Home;