import { UserButton, useSession } from "@clerk/nextjs";


export default function Home() {
  return (
    <main>
      <h1>Threads</h1><div>
        <UserButton signInUrl="/"/>
      </div>
    </main>
  );
}
