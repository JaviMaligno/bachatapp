import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  label: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, label }) => (
  <button 
    onClick={onClick}
    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mb-6"
  >
    <ArrowLeft className="w-5 h-5" />
    <span>{label}</span>
  </button>
); 