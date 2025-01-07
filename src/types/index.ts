export interface Quiz {
  id: string;
  title: string;
  description: string;
  progress: number;
  type: 'present' | 'missing' | 'sections' | 'rhythms';
  sectionTitle: string;
  questions: {
    id: number;
    audioUrl: string;
    correctAnswer: string[];
  }[];
}

export type { 
  Section,
  Lesson,
  Media,
  LessonSummary
} from './Lesson'; 
  