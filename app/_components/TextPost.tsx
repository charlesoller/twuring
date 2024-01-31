// Functions
import { emptyTwur, formatDate } from "../_lib/helper";
import { getTwur } from "../_lib/fetch/get";


// // Components
import { GrLike, GrDislike, GrChat } from "react-icons/gr";
import { InteractionButton } from "./InteractionButton";
import { Card, Button, User, Link } from "@nextui-org/react";

// // Types
import { TwurInterface, TextPost } from "../_lib/types";
// import { Link } from "react-router-dom";


export async function TextPost({ body, twur_id, likes, dislikes, comments, createdAt }: TextPost ){

    // const [ twur, setTwur ] = useState<TwurInterface>(emptyTwur)

    // useEffect(() => {
    //     const loadTwur = async(userId: string) => {
    //         const res = await getTwur(userId)
    //         setTwur(res)
    //     }

    //     loadTwur(userId)
    // }, [])
    const twur = await getTwur(twur_id)

    return (
        <Card className="flex flex-row px-6 pt-6 pb-3 gap-3 transition duration-200">


            <div className="w-full">
                <div className="flex items-center gap-3 mb-2">
                        <User
                        name={twur.name}
                        description={(
                            <Link href={`twurs/${twur_id}`} size="sm" isExternal>
                                @{twur.user_name}
                            </Link>
                        )}
                        avatarProps={{
                            src: twur.profile_pic
                        }}
                    />
                    <p className="m-0 p-0 h-fit text-sm ml-auto mb-auto">{formatDate(createdAt)}</p>
                </div>

                <p className="text-sm leading-6 mb-4">{ body }</p>
                <div className="flex">
                    <Button variant="light">
                        <GrLike />
                        {likes}
                    </Button>
                    <Button variant="light">
                        <GrDislike />
                        {dislikes}
                    </Button>
                    <Button variant="light">
                        <GrChat />
                        {comments.length}
                    </Button>
                </div>
            </div>
        </Card>
    )
}
