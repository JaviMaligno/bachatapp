export interface Quiz {
  id: string;
  title: string;
  description: string;
  progress?: number;
  type: 'present' | 'missing' | 'sections' | 'rhythms' | 'parts' | 'history';
  sectionTitle: string;
  questions: {
    id: number;
    question: string;
    options: {
      id: string;
      text: string;
    }[];
    correctAnswer: string | string[];
  }[];
}

export type { 
  Section,
  Lesson,
  Media,
  LessonSummary
} from './Lesson'; 
  