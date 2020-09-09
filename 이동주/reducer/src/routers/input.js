import React from 'react';



const Input = () => {
    const [password, setPassword] = useState("");

    const onChangePassword = ev => {
        const {target : { value } } = ev;
        setPassword(value);
    };
    return (
        <div>
            <input value={password} onChange={onChangePassword} />
        </div>
    );
};


export default Input;