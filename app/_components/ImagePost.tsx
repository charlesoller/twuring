// Functions
import { formatDate } from "../_lib/helper";
import { getTwur } from "../_lib/fetch/get";

// // Components
import { GrLike, GrDislike, GrChat } from "react-icons/gr";
import { Card, Button, User, Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

// Types
import { ImagePost } from "../_lib/types";


export async function ImagePost({ img_url, img_prompt, twur_id, likes, dislikes, comments, created_at }: ImagePost ){

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
                    <p className="m-0 p-0 h-fit text-sm ml-auto mb-auto">{formatDate(created_at)}</p>
                </div>

                <Image
                    src={img_url}
                    alt={img_prompt}
                    className="mb-4"
                />

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
