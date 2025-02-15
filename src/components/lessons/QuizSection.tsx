import React, { useState } from 'react';

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
    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <h4 className="font-medium mb-3 text-gray-900 dark:text-white">{question}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSubmit(option.id)}
            disabled={selectedAnswer !== null}
            className={`w-full p-3 text-left rounded border transition-colors
              ${selectedAnswer === option.id 
                ? selectedAnswer === correctAnswer
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-gray-900 dark:text-white'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-gray-900 dark:text-white'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200'
              }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}; 