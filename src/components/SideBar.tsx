import { useState } from 'react'
import assets from '../assets/assets'

const SideBar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='min-h-screen bg-gray-50 p-4 flex flex-col'>
        {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img src={assets.reactsvg} alt="Logo" className="w-8 h-8 bg-gray-400" />
        <h2 className="text-lg font-semibold">Interview Bot</h2>
      </div>

 {/* Chats Section */}
      <div className="flex flex-col overflow-y-auto mb-4">
        <button className="py-2 px-3 rounded-lg hover:bg-gray-200 text-left cursor-pointer">
          <img src={assets.add} alt="" className="w-6 h-6 inline-block mr-2" />
          New Chat
        </button>
        {/* Example Chat Buttons */}
        <button className="py-2 px-3 rounded-lg hover:bg-gray-200 text-left cursor-pointer">
          <img
            src={assets.search}
            alt=""
            className="w-6 h-6 inline-block mr-2"
          />
          Search
        </button>
        {/* Add more chats here */}
      </div>

      {/* Settings at the bottom */}
      <div className="mt-auto">
        <div
          className="relative inline-block text-left"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="w-full p-2 rounded-lg  hover:bg-gray-200 cursor-pointer text-left">
            <img
              src={assets.setting}
              alt=""
              className="w-6 h-6 inline-block mr-2"
            />
            Settings
          </button>

          {isOpen && (
            <div
              className="absolute bottom-9 mt-1 w-32 bg-white shadow-lg rounded-md z-10"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="w-full text-left p-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-100 cursor-pointer">
                Log out
              </button>
            </div>
          )}
          {/* <img src={assets.luffy} alt="" className="w-5 h-5 text-right" /> */}
        </div>
      </div>
    
    </div>
  )
}

export default SideBar