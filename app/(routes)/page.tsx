import { Feed } from '../_components/Feed'

import { Button } from "@nextui-org/button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Feed posts={[]} />
      <Button>Click</Button>
    </main>
  );
}
