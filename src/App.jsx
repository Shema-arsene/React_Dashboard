import React from "react"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
      </div>
      <div className=""></div>
    </main>
  )
}

export default App
