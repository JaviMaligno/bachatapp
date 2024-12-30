import { LucideIcon } from 'lucide-react';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  progress: number;
  type: 'present' | 'missing';
  questions: {
    id: number;
    audioUrl: string;
    correctInstruments: string[];
  }[];
}

export type { 
  Section,
  Lesson,
  Media,
  LessonSummary
} from './Lesson'; 
  