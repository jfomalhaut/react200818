import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/story">Story</Link></li>
            
        </ul>
    );
};

export default Navigation;