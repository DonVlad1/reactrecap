import React from "react";
import { useState } from "react";
import { listUsers } from "../utils"

const ListUsers = () =>
{
    const [users, setUsers] = useState([])
    const [toggle, setToggle] = useState(false)

    function toggleButton()
    {
        setToggle(!toggle)
    }

    async function getUsers(event)
    {
        event.preventDefault()
        let userData = await listUsers()
        setUsers(userData.map((user) => ({ name: user.name })))
    }

    return (
        <form onSubmit={getUsers} className='showUsers'>
            <button type='submit' onClick={toggleButton}>ShowUsers</button>
            <div>
                {toggle ?
                    (
                        users.map((user, userId) => (<h1 key={userId}>{user.name}</h1>))
                    ) : (
                        <div>
                            <h1>User List not loaded</h1>
                        </div>
                    )
                }
            </div>
        </form>
    )
}

const EditUser = ({ setter }) =>
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





export default ListUsers
