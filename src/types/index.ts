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

export interface LabelTheBandQuiz extends BaseQuiz {
  type: 'label-audio-to-silhouette' | 'label-name-to-silhouette' | 'label-audio-to-name';
  instructions: string;
  instruments: {
    id: string;
    name: string;
    audioPath: string;
    color?: string;
  }[];
  positions: {
    id: string;
    x: number; // percentage from left
    y: number; // percentage from top
    width: number; // percentage
    height: number; // percentage
    label: string; // which instrument should go here
    description?: string;
  }[];
  explanation?: string;
}

export type Quiz = HistoryQuiz | InstrumentQuiz | RhythmBuildingQuiz | LabelTheBandQuiz;

export type { 
  Section,
  Lesson,
  Media,
  LessonSummary
} from './Lesson'; 
  