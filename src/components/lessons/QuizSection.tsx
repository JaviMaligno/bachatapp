import React, { useState } from 'react';

interface QuizOption {
  id: string;
  text: string;
}

interface QuizSectionProps {
  options: QuizOption[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  options,
  correctAnswer,
  onAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (optionId: string) => {
    setSelectedAnswer(optionId);
    onAnswer(optionId === correctAnswer);
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Quick Check</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option.id)}
            className={`w-full p-4 text-left rounded-lg bg-white border 
              ${selectedAnswer === option.id 
                ? option.id === correctAnswer 
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : 'border-gray-200 hover:border-gray-300'
              } transition-all`}
          >
            <span className="font-medium">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}; 