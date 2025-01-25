import React from 'react';

interface ProgressBarProps {
  progress: number;
  showScore?: boolean;
  score?: number;
  total?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, showScore, score, total }) => (
  <div className="relative">
    <div className="mt-1 w-48 h-1 bg-gray-100 rounded-full">
      <div 
        className="h-full bg-green-500 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
    {showScore && score !== undefined && total !== undefined && (
      <div className="absolute -top-5 right-0 text-sm text-gray-600">
        {score}/{total}
      </div>
    )}
  </div>
);

// Function to get a unique key for each lesson/quiz
const getProgressKey = (sectionId: string, itemId: string, type: 'lesson' | 'quiz') => 
  `${type}_progress_${sectionId}_${itemId}`;

export const progressManager = {
  getProgress: (sectionId: string, itemId: string, type: 'lesson' | 'quiz' = 'lesson'): number => {
    const stored = localStorage.getItem(getProgressKey(sectionId, itemId, type));
    return stored ? parseInt(stored, 10) : 0;
  },

  setProgress: (sectionId: string, itemId: string, progress: number, type: 'lesson' | 'quiz' = 'lesson'): void => {
    localStorage.setItem(getProgressKey(sectionId, itemId, type), progress.toString());
  },

  getQuizScore: (sectionId: string, quizId: string): { score: number, total: number } | null => {
    const stored = localStorage.getItem(getProgressKey(sectionId, quizId, 'quiz'));
    if (!stored) return null;
    const [score, total] = stored.split('/').map(Number);
    return { score, total };
  },

  setQuizScore: (sectionId: string, quizId: string, score: number, total: number): void => {
    localStorage.setItem(getProgressKey(sectionId, quizId, 'quiz'), `${score}/${total}`);
  }
}; 