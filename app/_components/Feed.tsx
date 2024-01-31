// Components
import { Welcome } from "./Welcome";
import { TextPost } from "./TextPost";
import { ImagePost } from "./ImagePost";

// Functions
import { nanoid } from "nanoid";
import { getPosts } from "../_lib/fetch/get";

// Types
import { PostInterface } from "../_lib/types";
import { CaptionedImagePost } from "./CaptionedImagePost";


export async function Feed(){
    const data = await getPosts()
    data.reverse()
    const posts = data.map((ele: PostInterface) => {
        if(ele.type === "text") {
            return <TextPost key={nanoid()} body={ele.body!} twur_id={ele.twur_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} created_at={ele.created_at}/>
        } else if (ele.type === "image") {
            return <ImagePost key={nanoid()} img_url={ele.img_url!} img_prompt={ele.img_prompt!} twur_id={ele.twur_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} created_at={ele.created_at}/>
        } else if (ele.type === "captioned_image") {
            return <CaptionedImagePost key={nanoid()} img_url={ele.img_url!} img_prompt={ele.img_prompt!} body={ele.body!} twur_id={ele.twur_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} created_at={ele.created_at} />
        }
    })

    return (
        <section className="w-5/12 flex flex-col mx-auto gap-3">
            <Welcome />
            { posts }
        </section>
    )
  }
