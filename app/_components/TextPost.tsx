"use client"

// Functions
import { useState, useEffect } from "react";
// import { getTwur } from "../backend/api";
import { emptyTwur, formatDate } from "../_lib/helper";

// // Components
import { GrLike, GrDislike, GrChat } from "react-icons/gr";
import { InteractionButton } from "./InteractionButton";
import { Card, Button, User, Link } from "@nextui-org/react";

// // Types
import { TwurInterface, TextPost } from "../_lib/types";
// import { Link } from "react-router-dom";


export function TextPost({ text, userId, likes, dislikes, comments, createdAt }: TextPost ){

    const [ twur, setTwur ] = useState<TwurInterface>(emptyTwur)

    useEffect(() => {
        const loadTwur = async(userId: string) => {
            const res = await getTwur(userId)
            setTwur(res)
        }

        loadTwur(userId)
    }, [])

    return (
        <Card className="flex flex-row px-6 pt-6 pb-3 gap-3 transition duration-200">


            <div className="w-full">
                <div className="flex items-center gap-3 mb-2">
                        <User
                        name="Junior Garcia"
                        description={(
                            <Link href={`twurs/${userId}`} size="sm" isExternal>
                                @jrgarciadev
                            </Link>
                        )}
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                        }}
                    />
                    <p className="m-0 p-0 h-fit text-sm ml-auto mb-auto">{formatDate(createdAt)}</p>
                </div>

                <p className="text-sm leading-6 mb-4">{ text }</p>
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
