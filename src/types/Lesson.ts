export interface Media {
  image?: string;
  audio?: {
    [key: string]: string;  // Allows for multiple audio samples
  };
  video?: string;
}

// Base section interface
export interface Section {
  id: string;
  title: string;
  content: string;
  sections?: Section[];
  media?: Media;
}

// Core lesson structure
export interface Lesson {
  id: string;
  title: string;
  description: string;
  introduction?: string;
  sections: Section[];
  note?: string;
  summary?: string;
}

export interface MusicLesson extends Lesson {
  type: 'rhythm' | 'instruments' | 'structure';
} 