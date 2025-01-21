import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
} from "@heroicons/react/solid"
import React from "react"

const Sidebar = () => {
  return (
    <aside className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
      <div className="h-20 flex items-center">
        <HomeIcon
          width={40}
          className="text-gray-300 left-3 sm:left-6 fixed cursor-pointer hover:scale-110 duration-200"
        />
      </div>

      <div className="fixed left-3 sm:left-6 top-[85px]">
        <ChartBarIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer hover:scale-110 duration-200"
        />
        <DocumentSearchIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer hover:scale-110 duration-200"
        />
        <MailIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer hover:scale-110 duration-200"
        />
        <CreditCardIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer hover:scale-110 duration-200"
        />
        <BellIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer hover:scale-110 duration-200"
        />
      </div>

      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer hover:scale-110 duration-200"
          />
        </a>
        <ExternalLinkIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer hover:scale-110 duration-200"
        />
      </div>
    </aside>
  )
}

export default Sidebar
