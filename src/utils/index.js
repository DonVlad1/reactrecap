export const login = async (email, password, setter) =>
{
    try
    {
        const response = await fetch("http://localhost:3002/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "password": password
            })

        })
        const data = await response.json()
        console.log(data)
        setter(data.email)
    }
    catch (error)
    {
        console.log(error)
    }
}

export const listUsers = async (setter) =>
{
    try
    {
        const response = await fetch("http://localhost:3002/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response.json()
    }
    catch (error) 
    {

    }
}