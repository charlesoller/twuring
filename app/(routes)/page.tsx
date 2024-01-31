// Components
import { Feed } from '../_components/Feed'
import { Sidebar } from '../_components/Sidebar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <Feed />
      <Sidebar />
    </main>
  );
}
