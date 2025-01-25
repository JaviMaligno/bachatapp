export interface Media {
  image?: {
    src: string;
    caption?: string;
  };
  audio?: {
    samples: {
      name: string;
      path: string;
      song?: string;
      artist?: string;
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

// Base section interface
export interface Section {
  id: string;
  title: string;
  description?: string;
  content?: string;
  icon?: any;
  color?: string;
  comingSoon?: boolean;
  lessons?: LessonSummary[];
  quizzes?: any[];
  sections?: Section[];
  media?: Media;
  glossary?: GlossarySection[];
}

// Core lesson structure
export interface Lesson {
  id: string;
  title: string;
  description: string;
  progress?: number;
  introduction?: string;
  sections: Section[];
  note?: string;
  summary?: string;
  video?: string;
}

export interface MusicLesson extends Lesson {
  type: 'rhythm' | 'instruments' | 'structure';
}

// Add this new interface
export interface LessonSummary {
  id: string;
  title: string;
  description?: string;
  progress?: number;
  comingSoon?: boolean;
  video?: string;
} 

