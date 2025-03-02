import React from 'react';
import { KanbanItem } from '../types';
import { Calendar, Star, ChevronRight, Share2, ExternalLink, MessageSquare } from 'lucide-react';

interface KanbanCardProps {
  item: KanbanItem;
  isSimpleView: boolean;
  color: 'blue' | 'yellow' | 'purple' | 'green';
}

const KanbanCard: React.FC<KanbanCardProps> = ({ item, isSimpleView, color }) => {
  const getTagColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100/60 text-blue-800 border border-blue-200/40 backdrop-blur-md';
      case 'yellow':
        return 'bg-amber-100/60 text-amber-800 border border-amber-200/40 backdrop-blur-md';
      case 'purple':
        return 'bg-indigo-100/60 text-indigo-800 border border-indigo-200/40 backdrop-blur-md';
      case 'green':
        return 'bg-emerald-100/60 text-emerald-800 border border-emerald-200/40 backdrop-blur-md';
      default:
        return 'bg-gray-100/60 text-gray-800 border border-gray-200/40 backdrop-blur-md';
    }
  };

  const getTagBadge = () => {
    switch (color) {
      case 'blue':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100/60 text-blue-800 border border-blue-200/40 backdrop-blur-md">
            Asset listing
          </span>
        );
      case 'yellow':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100/60 text-red-800 border border-red-200/40 backdrop-blur-md">
            Brand interest
          </span>
        );
      case 'purple':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100/60 text-indigo-800 border border-indigo-200/40 backdrop-blur-md">
            Contract signature
          </span>
        );
      case 'green':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100/60 text-emerald-800 border border-emerald-200/40 backdrop-blur-md">
            Being implemented
          </span>
        );
      default:
        return null;
    }
  };

  // Generate star rating based on metrics
  const renderStarRating = () => {
    if (!item.metrics) return null;
    
    const percentage = parseInt(item.metrics.replace('%', ''));
    const rating = Math.round(percentage / 20); // Convert percentage to 1-5 scale
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-3.5 w-3.5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white/50 backdrop-filter backdrop-blur-xl rounded-md border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      {/* Card Image at the top - only shown when not in simple view */}
      {item.image && !isSimpleView && (
        <div className="h-32 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-3">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
            <p className="text-xs text-gray-500">{item.company}</p>
          </div>
          {item.logo && (
            <div className="h-8 w-8 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-center overflow-hidden">
              <img src={item.logo} alt={`${item.company} logo`} className="h-5 w-5" />
            </div>
          )}
        </div>
        
        {!isSimpleView && (
          <>
            <div className="flex flex-wrap gap-1 mt-2">
              {getTagBadge()}
              {renderStarRating()}
            </div>
            
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="mr-1 h-3.5 w-3.5 text-gray-400" />
                <span>{item.date}</span>
              </div>
            </div>
            
            {/* User Avatars */}
            {item.assignees && item.assignees.length > 0 && (
              <div className="mt-3 flex items-center">
                <div className="flex -space-x-1">
                  {item.assignees.map((avatar, index) => (
                    <div key={index} className="h-6 w-6 rounded-full ring-2 ring-white/80 overflow-hidden shadow-sm">
                      <img 
                        src={avatar} 
                        alt="User avatar" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        
        <div className="mt-3 pt-2 border-t border-gray-100/40 flex items-center justify-between">
          <div className="flex space-x-1">
            <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-white/60 backdrop-blur-md transition-colors">
              <MessageSquare className="h-3.5 w-3.5" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-white/60 backdrop-blur-md transition-colors">
              <Share2 className="h-3.5 w-3.5" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-white/60 backdrop-blur-md transition-colors">
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
          
          <div className="flex items-center">
            <div className="text-sm font-bold text-gray-900">
              {item.value}
            </div>
            <ChevronRight className="ml-1 h-3.5 w-3.5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
