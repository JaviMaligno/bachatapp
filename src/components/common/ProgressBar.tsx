import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="mt-1 w-48 h-1 bg-gray-100 rounded-full">
    <div 
      className="h-full bg-green-500 rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
);

// Function to get a unique key for each lesson
const getLessonKey = (sectionId: string, lessonId: string) => `lesson_progress_${sectionId}_${lessonId}`;

export const progressManager = {
  getProgress: (sectionId: string, lessonId: string): number => {
    const stored = localStorage.getItem(getLessonKey(sectionId, lessonId));
    return stored ? parseInt(stored, 10) : 0;
  },

  setProgress: (sectionId: string, lessonId: string, progress: number): void => {
    localStorage.setItem(getLessonKey(sectionId, lessonId), progress.toString());
  }
}; 