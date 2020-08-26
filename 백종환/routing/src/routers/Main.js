import React from 'react'

const Main = ({ match: { params: { name } } }) => {
    console.log(name);
    return (
    <h1>Main Page valus: { name }</h1>
    );
};

export default Main;