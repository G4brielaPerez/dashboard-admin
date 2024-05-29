import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { useMenuContext } from "./context/MenuContext"
import Dashboard from "./pages/Dashboard"

function App() {
  const { showMenu } = useMenuContext()

  return (
      <div className="w-screen h-screen flex bg-grey overflow-hidden">
        <div className={`transition-width duration-500 ${showMenu ? "w-1/3 xl:w-1/5" : "w-20"}`}>
          <Sidebar />
        </div>

        <div className="w-full flex flex-col">
          <Navbar />
          
          <div className="overflow-y-auto p-6">
            <Dashboard />
          </div>
        </div>
      </div>
  )
}

export default App
