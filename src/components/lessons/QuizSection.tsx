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
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h4 className="font-medium mb-3">{question}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSubmit(option.id)}
            disabled={selectedAnswer !== null}
            className={`w-full p-3 text-left rounded border
              ${selectedAnswer === option.id 
                ? selectedAnswer === correctAnswer
                  ? 'bg-green-50 border-green-500'
                  : 'bg-red-50 border-red-500'
                : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}; 