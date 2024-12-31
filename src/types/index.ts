export interface Lesson {
  id: string;
  title: string;
  progress: number;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  icon: any; // We'll use Lucide icon type
  color: string;
  lessons: Lesson[];
} 