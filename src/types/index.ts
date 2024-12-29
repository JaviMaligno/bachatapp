import { LucideIcon } from 'lucide-react';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  progress: number;
}

export type { 
  Section,
  Lesson,
  Media,
  LessonSummary
} from './Lesson'; 
  