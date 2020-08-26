import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../jsons/category.json';

const Navigation = () => {
	return (
		<ul className="header">
			{Category.map(item => (
				<li className="label">
					<Link to={`/${item.path}`}>{item.label}</Link>
				</li>
			))}
		</ul>
	);
};

export default Navigation;