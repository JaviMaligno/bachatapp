import { BookOpen, Music2, Users } from 'lucide-react';
import { Section, LessonSummary } from '../types';

export const sections: Section[] = [
  {
    id: 'history',
    title: 'History',
    description: 'Learn the history of Bachata',
    icon: BookOpen,
    color: 'bg-amber-100',
    lessons: [
      {
        id: 'origins',
        title: 'Origins of Bachata',
        description: 'Learn about the origins of Bachata music',
        progress: 80
      } as LessonSummary,
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
      { id: 'structure', title: 'Song Structure', progress: 40 },
      { id: 'instruments', title: 'Key Instruments', progress: 60 },
      { id: 'artists', title: 'Influential Artists', progress: 0 },
      { id: 'theory', title: 'Music Theory (Additional)', progress: 0 }
    ],
    quizzes: [
      { 
        id: 'instrument-recognition',
        title: 'Instrument Recognition',
        description: 'Test your ability to identify bachata instruments',
        progress: 0
      },
      // Add more quizzes here
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