import { KanbanData } from '../types';

export const mockData: KanbanData = {
  leads: [
    {
      id: 'lead-1',
      title: 'Holiday premium package',
      company: 'Listing ID: 364845',
      value: '$456,789',
      date: 'Days: 5',
      team: 'Asset listings',
      progress: 80,
      image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      assignees: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '82%'
    },
    {
      id: 'lead-2',
      title: 'Billboard / Listing / 2024 May 23',
      company: 'Listing ID: 364845',
      value: '$351,065',
      date: 'Days: 8',
      progress: 70,
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      assignees: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '73%'
    }
  ],
  inProgress: [
    {
      id: 'progress-1',
      title: 'Marvel Social Media Engagement',
      company: 'Undisclosed brand',
      value: '$593,653',
      date: 'Days: 5',
      team: 'Brand interest',
      progress: 45,
      image: 'https://picsum.photos/seed/picsum/800/600',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      assignees: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '73%'
    },
    {
      id: 'progress-2',
      title: 'Cross Promotion Seating Pack',
      company: 'Industry category: Entertainment',
      value: '$763,983',
      date: 'Days: 12',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      assignees: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '87%'
    }
  ],
  negotiation: [
    {
      id: 'negotiation-1',
      title: 'Mercedes-Benz Group AG',
      company: 'Deal ID: 364845',
      value: '$620,764',
      date: 'Days: 5',
      team: 'Contract signature',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png',
      assignees: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '89%'
    },
    {
      id: 'negotiation-2',
      title: 'Cavs Media and Broadcast Pack',
      company: 'Deal ID: 364845',
      value: '$425,850',
      date: 'Days: 12',
      progress: 80,
      image: 'https://images.unsplash.com/photo-1588492069485-d05b56b2831d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      assignees: [
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '76%'
    }
  ],
  closed: [
    {
      id: 'closed-1',
      title: 'Cavs Arena Branding Pack',
      company: 'Deal ID: 364845',
      value: '$620,764',
      date: 'Days to execute: 5',
      team: 'Being implemented',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      assignees: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '100%'
    },
    {
      id: 'closed-2',
      title: 'Cleveland Clinic Foundation',
      company: 'Deal ID: 364845',
      value: '$351,065',
      date: 'Days to execute: 8',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cleveland_Clinic_logo.svg/1200px-Cleveland_Clinic_logo.svg.png',
      assignees: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ],
      metrics: '100%'
    }
  ]
};
