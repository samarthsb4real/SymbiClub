import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="text-gray-700">
      <h1 className="head-text text-gray-700">Threads</h1>
      <div className="text-xl">
        <UserButton afterSwitchSessionUrl="/" />
        <div>Tell me</div>
      </div>
    </main>
  );
}
