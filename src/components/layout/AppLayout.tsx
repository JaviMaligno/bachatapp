import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-4xl mx-auto bg-white min-h-screen shadow-sm">
      {children}
    </div>
  </div>
); 