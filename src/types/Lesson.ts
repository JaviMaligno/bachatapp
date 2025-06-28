export interface Media {
  image?: {
    src: string;
    caption?: string;
  };
  images?: {
    src: string;
    caption?: string;
  }[];
  audio?: {
    samples: {
      name: string;
      path?: string;
      song?: string;
      artist?: string;
      spotifyLink?: string;
    }[];
  };
  video?: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface GlossarySection {
  category: string;
  terms: {
    term: string;
    definition: string;
  }[];
}

interface Artist {
  name: string;
  spotifyLink?: string;
}

// Base section interface
export interface Section {
  id: string;
  title: string;
  description?: string;
  content?: string;
  content2?: string;
  content3?: string;
  icon?: any;
  color?: string;
  comingSoon?: boolean;
  lessons?: LessonSummary[];
  quizzes?: any[];
  sections?: Section[];
  media?: Media;
  media2?: Media;
  media3?: Media;
  glossary?: GlossarySection[];
  artists?: Artist[];
  interactiveBlocks?: InteractiveBlock[];
}

// Base lesson interface
export interface BaseLesson {
  id: string;
  title: string;
  description: string;
  note?: string;
  summary?: string;
  references?: string[];
  progress?: number;
  video?: string;
  image?: string;
  type?: string;
}

// Content block for history lessons
export interface ContentBlock {
  content: string;
  media?: Media;
  interactiveBlocks?: InteractiveBlock[];
}

// History lesson specific section
export interface HistorySection extends Section {
  contentBlocks?: ContentBlock[];
}

// History lesson structure
export interface HistoryLesson extends BaseLesson {
  type: 'history';
  introduction?: string;
  sections: HistorySection[];
  summary?: string;
  references?: string[];
}

// Music lesson structure
export interface MusicLesson extends BaseLesson {
  type: 'rhythm' | 'instruments' | 'structure';
  introduction?: string;
  sections: Section[];
  summary?: string;
  note?: string;
}

// Combined lesson type
export type Lesson = MusicLesson | HistoryLesson;

// Add this new interface
export interface LessonSummary {
  id: string;
  title: string;
  description?: string;
  progress?: number;
  comingSoon?: boolean;
  video?: string;
  image?: string;
}

// Interactive block types as specified in the plan
export interface QuizOption {
  id: string;
  text: string;
}

export interface InlineQuizData {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation?: string;
}

export type BeatState = 0 | 1 | 2; // 0: off, 1: normal, 2: accent

export interface BuildAClaveData {
  id: string;
  title: string;
  instructions: string;
  pattern: BeatState[]; // 0: off, 1: normal, 2: accent
  bpm: number;
  explanation?: string;
}

export interface BuildMamboData {
  id: string;
  title: string;
  instructions: string;
  pattern: BeatState[]; // 16 sixteenth notes for one bar
  bpm: number;
  explanation?: string;
}

export interface LabelTheBandData {
  id: string;
  title: string;
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

export type InteractiveBlock =
  | { kind: 'quiz'; id: string; data: InlineQuizData }
  | { kind: 'audio-layer'; tracks: any[] } // Placeholder for future implementation
  | { kind: 'label-the-band'; id: string; data: LabelTheBandData }
  | { kind: 'timeline'; events: any[] } // Placeholder for future implementation
  | { kind: 'flashcard'; termIds: string[] } // Placeholder for future implementation
  | { kind: 'build-a-clave'; id: string; data: BuildAClaveData }
  | { kind: 'build-mambo'; id: string; data: BuildMamboData };
 
