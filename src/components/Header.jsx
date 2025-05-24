import { Bell, Plus, Search } from "lucide-react";

export default function Header({setSidebarOpen,sidebarOpen}) {
    return (
         <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4 flex-wrap gap-4">
            <div className="flex items-center gap-4 ">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <div className="w-6 h-6 flex flex-col justify-center gap-1">
                  <div className="h-0.5 bg-gray-600 w-full"></div>
                  <div className="h-0.5 bg-gray-600 w-full"></div>
                  <div className="h-0.5 bg-gray-600 w-full"></div>
                </div>
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              <div className="flex items-center gap-4 flex-wrap">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
              
            </div>
            </div>
            
            <div className='flex gap-4 flex-wrap ' >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              
                <span className="text-white text-sm font-semibold">A</span>
              </div>
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white text-sm font-semibold"><Plus /> </span>
              </div>
            </div>
            
          </div>
        </header>
    )
}
