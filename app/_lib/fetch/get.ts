const URL = "http://localhost:3000"

export const getTwurs = async() => {
    const res = await fetch(`${URL}/api/twurs`, {
        method: "GET"
    }).then(res => res.json())

    return res.data;
}

export const getTwur = async(id: string) => {
    console.log("THIS IS THE ID", id)
    const res = await fetch(`${URL}/api/twurs/${id}`, {
        method: "GET"
    }).then(res => res.json())

    return res.data
}

export const getPosts = async() => {
    const res = await fetch(`${URL}/api/posts`, {
        method: "GET"
    }).then(res => res.json())

    return res.data
}
