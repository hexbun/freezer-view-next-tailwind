import Sidebar from '../components/Sidebar'
import Center from '../components/Center'

export default function Home() {
  return (
    <div>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  )
}
