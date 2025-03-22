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

