import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from  'react-router-dom';

const Detail = () => {
	const detail = useSelector(res => res);

	useEffect(() => {
		console.log(detail);

	}, [detail]);

	return (
		<div>
			{detail.map((item, index) => (
				<div className="item" key={`ITEM${index}`}>
					<div className="img">
						<img src={item.src} />
					</div>
					<div className="info">
						<div className="name">{item.name}</div>
						<div className="price">{item.price}원</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Detail;