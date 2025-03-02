import React from 'react';
import KanbanCard from './KanbanCard';
import { KanbanItem } from '../types';
import { Plus, ChevronDown } from 'lucide-react';

interface KanbanColumnProps {
  title: string;
  items: KanbanItem[];
  count: number;
  totalValue: string;
  color: 'blue' | 'yellow' | 'purple' | 'green';
  isSimpleView: boolean;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ 
  title, 
  items, 
  count, 
  totalValue, 
  color, 
  isSimpleView 
}) => {
  const getHeaderColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100/70 border-blue-200/40 backdrop-filter backdrop-blur-xl';
      case 'yellow':
        return 'bg-amber-100/70 border-amber-200/40 backdrop-filter backdrop-blur-xl';
      case 'purple':
        return 'bg-indigo-100/70 border-indigo-200/40 backdrop-filter backdrop-blur-xl';
      case 'green':
        return 'bg-emerald-100/70 border-emerald-200/40 backdrop-filter backdrop-blur-xl';
      default:
        return 'bg-gray-100/70 border-gray-200/40 backdrop-filter backdrop-blur-xl';
    }
  };

  const getBackgroundColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50/40 border-blue-200/30 backdrop-filter backdrop-blur-lg';
      case 'yellow':
        return 'bg-amber-50/40 border-amber-200/30 backdrop-filter backdrop-blur-lg';
      case 'purple':
        return 'bg-indigo-50/40 border-indigo-200/30 backdrop-filter backdrop-blur-lg';
      case 'green':
        return 'bg-emerald-50/40 border-emerald-200/30 backdrop-filter backdrop-blur-lg';
      default:
        return 'bg-gray-50/40 border-gray-200/30 backdrop-filter backdrop-blur-lg';
    }
  };

  const getBadgeColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-600/80 text-white backdrop-filter backdrop-blur-xl shadow-sm';
      case 'yellow':
        return 'bg-amber-600/80 text-white backdrop-filter backdrop-blur-xl shadow-sm';
      case 'purple':
        return 'bg-indigo-600/80 text-white backdrop-filter backdrop-blur-xl shadow-sm';
      case 'green':
        return 'bg-emerald-600/80 text-white backdrop-filter backdrop-blur-xl shadow-sm';
      default:
        return 'bg-gray-600/80 text-white backdrop-filter backdrop-blur-xl shadow-sm';
    }
  };

  const getColumnBorderClasses = () => {
    switch (color) {
      case 'blue':
        return 'border-blue-200/30';
      case 'yellow':
        return 'border-amber-200/30';
      case 'purple':
        return 'border-indigo-200/30';
      case 'green':
        return 'border-emerald-200/30';
      default:
        return 'border-gray-200/30';
    }
  };

  // Extract step number from title
  const stepMatch = title.match(/Step (\d+):/);
  const stepNumber = stepMatch ? stepMatch[0] : '';
  const mainTitle = stepMatch ? title.replace(stepMatch[0], '').trim() : title;

  return (
    <div className={`flex flex-col rounded-lg border ${getColumnBorderClasses()} shadow-lg overflow-hidden ${getBackgroundColorClasses()}`}>
      <div className={`p-3 border-b ${getHeaderColorClasses()}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-medium text-gray-500">{stepNumber}</span>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">{mainTitle}</h3>
            </div>
            <div className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${getBadgeColorClasses()}`}>
              {count}
            </div>
          </div>
          <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-white/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-900">{totalValue}</div>
          <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-white/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-2 overflow-y-auto space-y-2">
        {items.map((item) => (
          <KanbanCard key={item.id} item={item} isSimpleView={isSimpleView} color={color} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
