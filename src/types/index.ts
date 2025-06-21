export interface BaseQuiz {
  id: string;
  title: string;
  description: string;
  progress?: number;
  sectionTitle: string;
}

export interface HistoryQuiz extends BaseQuiz {
  type: 'history';
  questions: {
    id: number;
    question: string;
    options: {
      id: string;
      text: string;
    }[];
    correctAnswer: string;
  }[];
}

export interface InstrumentQuiz extends BaseQuiz {
  type: 'present' | 'missing' | 'sections' | 'rhythms' | 'parts';
  questions: {
    id: number;
    audioUrl: string;
    correctAnswer: string[];
  }[];
}

export interface RhythmBuildingQuiz extends BaseQuiz {
  type: 'rhythm-building';
  challenges: {
    id: string;
    title: string;
    instructions: string;
    rhythmType: 'derecho' | 'majao' | 'mambo';
    pattern: (0 | 1 | 2)[];
    bpm: number;
    explanation: string;
  }[];
}

export type Quiz = HistoryQuiz | InstrumentQuiz | RhythmBuildingQuiz;

export type { 
  Section,
  Lesson,
  Media,
  LessonSummary
} from './Lesson'; 
  