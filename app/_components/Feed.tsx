// Types
import { Welcome } from "./Welcome";
import { getPosts } from "../_lib/fetch/get";
import { PostInterface } from "../_lib/types";
import { TextPost } from "./TextPost";
import { nanoid } from "nanoid";

export async function Feed(){
    const data = await getPosts()
    const posts = data.map((ele) => {
        if(ele.type === "text") {
            return <TextPost key={nanoid()} body={ele.body!} twur_id={ele.twur_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} createdAt={ele.created_at}/>
        }
    })
    
    return (
        <section className="w-5/12 flex flex-col mx-auto gap-3">
            <Welcome />
            { posts }
        </section>
    )
  }
