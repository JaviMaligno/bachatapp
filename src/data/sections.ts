import { BookOpen, Music2, Users } from 'lucide-react';
import { Section } from '../types';

export const sections: Section[] = [
  {
    id: 'history',
    title: 'History',
    icon: BookOpen,
    color: 'bg-amber-100',
    lessons: [
      { id: 'origins', title: 'Origins of Bachata', progress: 80 },
      { id: 'evolution', title: 'Evolution Through Decades', progress: 30 },
      { id: 'modern', title: 'Modern Bachata', progress: 0 }
    ]
  },
  // ... rest of your sections data
]; 