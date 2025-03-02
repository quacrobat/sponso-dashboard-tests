import React from 'react';
import { Home, Users, Briefcase, BarChart2, Star, Filter, Calendar, Settings, HelpCircle, ChevronDown } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 bg-white">
            <div className="space-y-1">
              <a
                href="#"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-blue-600"
              >
                <Home className="text-white mr-3 h-5 w-5" aria-hidden="true" />
                Home
              </a>
              
              <div className="mt-2">
                <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600">
                  <div className="flex items-center">
                    <span>Who we are</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="mt-2">
                <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600">
                  <div className="flex items-center">
                    <span>What we offer</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="px-3">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Smart assistant
                </h3>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <span className="text-sm font-medium">SA</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">Smart assistant</p>
                    <p className="text-xs text-gray-500">Let's chat to Sponso...</p>
                  </div>
                </div>
              </div>
              
              <div className="px-3 pt-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Recent conversations
                </h3>
                <div className="mt-2 space-y-2">
                  {['Daniel Robert', 'Emily Thompson', 'James Anderson', 'Michael Harris', 'Olivia Walker'].map((name, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">{name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">{name}</p>
                        <p className="text-xs text-gray-500">
                          {index === 0 ? 'Can you help me?' : 
                           index === 1 ? 'Have booking details...' : 
                           index === 2 ? 'About yesterday\'s call...' : 
                           index === 3 ? 'I need assistance with...' : 
                           'I never thought that...'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
