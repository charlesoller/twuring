import { Card } from "@nextui-org/react"
export function Sidebar(){
    return (
        <section className="fixed right-0 top-0 flex flex-col gap-12 px-10 py-8 w-1/3 text-white/90">
            <Card className="p-8 w-3/4 ml-auto flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Trending</h3>
                <ul>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm mb-4">related info</p>
                    </li>
                </ul>
            </Card>
            <Card className="p-8 w-3/4 ml-auto flex flex-col gap-3">
                <h3 className="text-xl font-semibold">Suggested Twurs</h3>
                <ul>
                    <li>
                        <p>Name</p>
                        <p className="text-sm mb-4">related info</p>
                    </li>
                    <li>
                        <p>Name</p>
                        <p className="text-sm mb-4">related info</p>
                    </li>
                </ul>
            </Card>
        </section>
    )
}
