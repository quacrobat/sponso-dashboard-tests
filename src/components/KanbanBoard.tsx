import React from 'react';
import KanbanColumn from './KanbanColumn';
import { KanbanData } from '../types';

interface KanbanBoardProps {
  data: KanbanData;
  isSimpleView: boolean;
  searchQuery: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ data, isSimpleView, searchQuery }) => {
  // Filter data based on search query
  const filteredData = {
    leads: data.leads.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    inProgress: data.inProgress.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    negotiation: data.negotiation.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    closed: data.closed.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  };

  // Calculate total values for each column
  const getTotalValue = (items: any[]) => {
    return items.reduce((total, item) => {
      const value = item.value.replace(/[^0-9.]/g, '');
      return total + parseFloat(value || 0);
    }, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Sponsorship Pipeline</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your sponsorship opportunities efficiently</p>
        </div>
        <div className="flex space-x-2">
          <select className="block w-full pl-3 pr-10 py-2 text-base bg-white/70 border border-gray-300/50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md backdrop-blur-md shadow-sm">
            <option>All Sponsors</option>
            <option>Tech Companies</option>
            <option>Financial Services</option>
            <option>Retail</option>
          </select>
          <select className="block w-full pl-3 pr-10 py-2 text-base bg-white/70 border border-gray-300/50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md backdrop-blur-md shadow-sm">
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Year to Date</option>
            <option>Custom Range</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[calc(100vh-180px)]">
        <KanbanColumn 
          title="Step 1: Listings" 
          items={filteredData.leads} 
          count={filteredData.leads.length}
          totalValue={getTotalValue(filteredData.leads)}
          color="blue"
          isSimpleView={isSimpleView}
        />
        <KanbanColumn 
          title="Step 2: Opportunities" 
          items={filteredData.inProgress} 
          count={filteredData.inProgress.length}
          totalValue={getTotalValue(filteredData.inProgress)}
          color="yellow"
          isSimpleView={isSimpleView}
        />
        <KanbanColumn 
          title="Step 3: Deal in Progress" 
          items={filteredData.negotiation} 
          count={filteredData.negotiation.length}
          totalValue={getTotalValue(filteredData.negotiation)}
          color="purple"
          isSimpleView={isSimpleView}
        />
        <KanbanColumn 
          title="Step 4: Signed Deals" 
          items={filteredData.closed} 
          count={filteredData.closed.length}
          totalValue={getTotalValue(filteredData.closed)}
          color="green"
          isSimpleView={isSimpleView}
        />
      </div>
    </div>
  );
};

export default KanbanBoard;
