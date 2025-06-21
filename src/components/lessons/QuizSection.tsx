import React, { useState } from 'react';
import { QuestionDisplay } from '../quizzes/QuestionDisplay';

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
    <div className="mt-4">
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
          Select your answer:
        </h4>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSubmit(option.id)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg
              ${selectedAnswer === option.id 
                ? selectedAnswer === correctAnswer
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-gray-900 dark:text-white scale-[1.02]'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-gray-900 dark:text-white scale-[1.02]'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 text-gray-700 dark:text-gray-200'
              }
              ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <span className="font-medium text-lg">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}; 