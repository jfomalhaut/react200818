import React, { useState } from 'react'

const useInput = (initialValue) => {
    const [data, setData] = useState(initialValue);
    const onChange = ev => {
        const { target :{ value } } = ev;
        setData(value);
    };

    return [data, onChange]; 
};

export default useInput;