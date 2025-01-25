export interface Lesson {
  id: string;
  title: string;
  progress: number;
}

export interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  lessons: Lesson[];
}

export interface LessonContent {
  title: string;
  content: string;
  videoUrl?: string;
} 