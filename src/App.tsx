import React, { useState } from 'react';
import { Search, List, Grid3X3, Bell, User, Menu } from 'lucide-react';
import KanbanBoard from './components/KanbanBoard';
import { mockData } from './data/mockData';

function App() {
  const [isSimpleView, setIsSimpleView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white/60 backdrop-filter backdrop-blur-xl border-r border-gray-200/40 shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-200/40 flex items-center justify-between">
          <h1 className={`font-bold text-blue-600 text-xl ${!isSidebarOpen && 'hidden'}`}>Sponsorly</h1>
          {!isSidebarOpen && <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">S</div>}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100/60 backdrop-blur-md"
          >
            <Menu size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {['Dashboard', 'Sponsorships', 'Inventory', 'Brands', 'Analytics', 'Settings'].map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`flex items-center p-2 rounded-md ${index === 1 ? 'bg-blue-50/70 text-blue-600 backdrop-blur-md' : 'text-gray-600 hover:bg-gray-100/60 backdrop-blur-md'}`}
                >
                  <span className="mr-3">{index === 0 ? '🏠' : index === 1 ? '🤝' : index === 2 ? '📦' : index === 3 ? '🏢' : index === 4 ? '📊' : '⚙️'}</span>
                  {isSidebarOpen && <span>{item}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200/40">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              JD
            </div>
            {isSidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">john@sponsorly.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white/60 backdrop-filter backdrop-blur-xl border-b border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center flex-1">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search sponsorships..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300/50 rounded-md bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSimpleView(false)}
                className={`p-2 rounded-md ${!isSimpleView ? 'bg-blue-100/70 text-blue-600 backdrop-blur-md' : 'text-gray-500 hover:bg-gray-100/60 backdrop-blur-md'}`}
              >
                <Grid3X3 size={20} />
              </button>
              <button 
                onClick={() => setIsSimpleView(true)}
                className={`p-2 rounded-md ${isSimpleView ? 'bg-blue-100/70 text-blue-600 backdrop-blur-md' : 'text-gray-500 hover:bg-gray-100/60 backdrop-blur-md'}`}
              >
                <List size={20} />
              </button>
              <div className="h-6 border-r border-gray-300/60"></div>
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100/60 backdrop-blur-md relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100/60 backdrop-blur-md">
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <KanbanBoard data={mockData} isSimpleView={isSimpleView} searchQuery={searchQuery} />
        </main>
      </div>
    </div>
  );
}

export default App;
