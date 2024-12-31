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