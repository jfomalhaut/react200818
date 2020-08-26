import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/main/ronaldo">Main</Link></li>
            <li><Link to="/list">List</Link></li>
        </ul>
    );
};

export default Navigation;
