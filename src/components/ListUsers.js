import React from "react";
import { useState } from "react";
import { listUsers } from "../utils"

const ListUsers = () =>
{
    const [users, setUsers] = useState([])

    async function getUsers(event)
    {
        event.preventDefault()
        let userData = await listUsers()
        setUsers(userData.map((user) => ({ name: user.name })))
    }

    return (
        <form onSubmit={getUsers} className='showUsers'>
            <button type='submit'>ShowUsers</button>
            <div>
                {users.map((user) => (<h1>{user.name}</h1>))}
            </div>
        </form>
    )
}
export default ListUsers
