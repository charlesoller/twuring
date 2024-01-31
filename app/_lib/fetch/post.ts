import { PostInterface } from "../types"
const URL = "http://localhost:3000"

export const createPost = async(data: PostInterface) => {
    console.log("Creating a post from the following data: ", data)
    try {
        const res = await fetch(`${URL}/api/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (e: any) {
        throw new Error("Failed to post to server.")
    }
}
