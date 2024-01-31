// Components
import { Feed } from '../_components/Feed'
import { TextPost } from '../_components/TextPost'
import { ImagePost } from '../_components/ImagePost'
import { CaptionedImagePost } from '../_components/CaptionedImagePost'
import { Sidebar } from '../_components/Sidebar'
import { nanoid } from 'nanoid';

export default function Home() {
  const posts = [
    <TextPost key={nanoid()} text={"Lorem ipsum dolor blah blah lorem dolor ipsum dolor lorem ipusm blah blah and then it goes onto a second line"} userId={'1'} likes={23} dislikes={2} comments={[]} createdAt={""}/>
  ]
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <Feed posts={posts} />
      <Sidebar />
    </main>
  );
}
