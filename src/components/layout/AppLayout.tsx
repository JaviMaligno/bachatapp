import React from 'react';
import { DarkModeToggle } from '../common/DarkModeToggle';
import { FeedbackButton } from '../common/FeedbackButton';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 min-h-screen shadow-sm relative">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      {children}
      <FeedbackButton />
    </div>
  </div>
); 