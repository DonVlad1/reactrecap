import React from "react";
import { useState } from "react";
import { login } from "../utils"

const Login = ({ setter }) =>
{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) =>
    {
        event.preventDefault()
        await login(email, password, setter)
    }

    return (
        <form onSubmit={submitHandler} className='loginForm'>
            <label>
                Email
                <input onChange={(event) => setEmail(event.target.value)}></input>
            </label>
            <br></br>

            <label>
                Password
                <input onChange={(event) => setPassword(event.target.value)}></input>
            </label>
            <br></br>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login

