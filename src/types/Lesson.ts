export interface Media {
  image?: {
    src: string;
    caption?: string;
  };
  audio?: {
    [key: string]: string;  // Allows for multiple audio samples
  };
  video?: string;
}

// Base section interface
export interface Section {
  id: string;
  title: string;
  description?: string;
  content?: string;
  icon?: any;
  color?: string;
  lessons?: LessonSummary[];
  quizzes?: any[];
  sections?: Section[];
  media?: Media;
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
} 