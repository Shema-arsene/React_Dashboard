import React from "react"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import LeftColumn from "./Components/LeftColumn"
import RightColumn from "./Components/RightColumn"

const App = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
