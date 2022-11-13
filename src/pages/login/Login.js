import React from "react";
import {useNavigate} from "react-router";

function Login() {
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate('user')
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}
export default Login;
