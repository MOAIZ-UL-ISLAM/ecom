import { UserButton } from "@clerk/nextjs";

const Setup =() => {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <p className="bg-gray-800 p-4 text-white">Hello </p>
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}
export default Setup;

