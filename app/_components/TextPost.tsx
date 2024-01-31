// Functions
import { formatDate } from "../_lib/helper";
import { getTwur } from "../_lib/fetch/get";

// // Components
import { GrLike, GrDislike, GrChat } from "react-icons/gr";
import { Card, Button, User, Link } from "@nextui-org/react";

// // Types
import { TextPost } from "../_lib/types";


export async function TextPost({ body, twur_id, likes, dislikes, comments, created_at }: TextPost ){

    const twur = await getTwur(twur_id)

    return (
        <Card className="flex flex-row px-6 pt-6 pb-3 gap-3 transition duration-200">
            <div className="w-full">
                <div className="flex items-center gap-3 mb-3">
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

                    <p className="m-0 p-0 h-fit text-sm ml-auto mb-auto">{formatDate(created_at)}</p>
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
