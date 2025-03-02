export interface KanbanItem {
  id: string;
  title: string;
  company: string;
  value: string;
  date: string;
  team?: string;
  progress?: number;
  image?: string;
  logo?: string;
  assignees?: string[];
  metrics?: string;
}

export interface KanbanData {
  leads: KanbanItem[];
  inProgress: KanbanItem[];
  negotiation: KanbanItem[];
  closed: KanbanItem[];
}
