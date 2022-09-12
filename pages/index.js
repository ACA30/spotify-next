import { getSession } from "next-auth/react"
import Content from "../components/Content"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Content />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
