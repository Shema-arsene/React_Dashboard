import { SearchIcon } from "@heroicons/react/solid"
import { TextInput } from "@tremor/react"
import React from "react"

const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex items-center justify-between p-2"
    >
      <h1 className="font-semibold text-gray-300">Dashboard</h1>
      <div className="py-2">
        <TextInput icon={SearchIcon} placeholder="Search..." />
      </div>
    </div>
  )
}

export default Navbar
