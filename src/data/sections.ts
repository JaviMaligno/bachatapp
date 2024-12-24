import { BookOpen, Music2, Users } from 'lucide-react';
import { Section } from '../types';

export const sections: Section[] = [
  {
    id: 'history',
    title: 'History',
    description: 'Learn the history of Bachata',
    icon: BookOpen,
    color: 'bg-amber-100',
    lessons: [
      { id: 'origins', title: 'Origins of Bachata', progress: 80 },
      { id: 'evolution', title: 'Evolution Through Decades', progress: 30 },
      { id: 'modern', title: 'Modern Bachata', progress: 0 }
    ]
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Learn the music of Bachata',
    icon: Music2,
    color: 'bg-rose-100',
    lessons: [
      { id: 'rhythm', title: 'Basic Rhythms', progress: 100 },
      { id: 'structure', title: 'Song Structure', progress: 0 },
      { id: 'instruments', title: 'Key Instruments', progress: 60 },
      { id: 'artists', title: 'Influential Artists', progress: 0 },
      { id: 'theory', title: 'Music Theory (Additional)', progress: 0 }
    ]
  },
  {
    id: 'dance',
    title: 'Dance',
    description: 'Learn the dance of Bachata',
    icon: Users,
    color: 'bg-blue-100',
    lessons: [
      { id: 'basic-steps', title: 'Basic Steps', progress: 90 },
      { id: 'turns', title: 'Basic Turns', progress: 40 },
      { id: 'combinations', title: 'Step Combinations', progress: 0 }
    ]
  }
]; 