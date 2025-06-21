import React from 'react';
import { HelpCircle } from 'lucide-react';

interface QuestionDisplayProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  instructions?: string;
  className?: string;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  questionNumber,
  totalQuestions,
  question,
  instructions,
  className = ''
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-600/20 dark:to-purple-600/20 blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold shadow-lg animate-pulse">
              {questionNumber}
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              of {totalQuestions}
            </span>
          </div>
          <HelpCircle className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>

        {/* Question box */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 transform transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {question}
          </h3>
          
          {instructions && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 italic">
              💡 {instructions}
            </p>
          )}
        </div>

        {/* Visual accent */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30" />
      </div>
    </div>
  );
};