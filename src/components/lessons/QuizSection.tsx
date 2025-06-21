import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface QuizOption {
  id: string;
  text: string;
}

interface QuizSectionProps {
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  question,
  options,
  correctAnswer,
  onComplete,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSubmit = (optionId: string) => {
    setSelectedAnswer(optionId);
    onComplete(optionId === correctAnswer);
  };

  return (
    <div className="mt-6">
      {/* Enhanced Question Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 
                      border-2 border-blue-200 dark:border-blue-700 rounded-xl p-6 mb-6 
                      shadow-lg relative overflow-hidden">
        {/* Decorative Icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <HelpCircle className="w-20 h-20 text-blue-600 dark:text-blue-400" />
        </div>
        
        {/* Question Text */}
        <h4 className="text-xl font-bold text-gray-900 dark:text-white relative z-10 
                       leading-relaxed">
          {question}
        </h4>
      </div>
      
      {/* Answer Options */}
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSubmit(option.id)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all transform
              hover:scale-[1.02] active:scale-[0.98] font-medium
              ${selectedAnswer === option.id 
                ? selectedAnswer === correctAnswer
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-gray-900 dark:text-white shadow-md'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-gray-900 dark:text-white shadow-md'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md text-gray-700 dark:text-gray-200'
              }
              ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-not-allowed'}
            `}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}; 