import React, { useState } from 'react';
import { InlineQuizData } from '../../types/Lesson';

interface InlineQuizProps {
  quizData: InlineQuizData;
  onComplete: (isCorrect: boolean) => void;
}

export const InlineQuiz: React.FC<InlineQuizProps> = ({
  quizData,
  onComplete,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = (optionId: string) => {
    setSelectedAnswer(optionId);
    const isCorrect = optionId === quizData.correctAnswer;
    setShowExplanation(true);
    
    // Trigger confetti on correct answer
    if (isCorrect) {
      // Simple confetti effect using CSS animations
      const confetti = document.createElement('div');
      confetti.innerHTML = '🎉';
      confetti.className = 'confetti-celebration';
      confetti.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        z-index: 1000;
        animation: bounce 0.6s ease-out;
        pointer-events: none;
      `;
      
      // Add animation keyframes if not already added
      if (!document.querySelector('#confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
          @keyframes bounce {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }
      
      document.body.appendChild(confetti);
      setTimeout(() => {
        document.body.removeChild(confetti);
      }, 600);
    }
    
    setTimeout(() => {
      onComplete(isCorrect);
    }, 1500);
  };

  return (
    <div className="my-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-3 mt-1">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">?</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
            Quick Check
          </h4>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            {quizData.question}
          </p>
        </div>
      </div>
      
      <div className="space-y-3 ml-11">
        {quizData.options.map((option) => {
          let buttonClass = 'w-full p-3 text-left rounded-lg border transition-all duration-200 ';
          
          if (selectedAnswer === null) {
            buttonClass += 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-200 cursor-pointer';
          } else if (selectedAnswer === option.id) {
            if (option.id === quizData.correctAnswer) {
              buttonClass += 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200';
            } else {
              buttonClass += 'bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-200';
            }
          } else if (option.id === quizData.correctAnswer && selectedAnswer !== null) {
            buttonClass += 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200';
          } else {
            buttonClass += 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400';
          }
          
          return (
            <button
              key={option.id}
              onClick={() => handleSubmit(option.id)}
              disabled={selectedAnswer !== null}
              className={buttonClass}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  {selectedAnswer === option.id && option.id === quizData.correctAnswer && (
                    <span className="text-green-600 dark:text-green-400">✓</span>
                  )}
                  {selectedAnswer === option.id && option.id !== quizData.correctAnswer && (
                    <span className="text-red-600 dark:text-red-400">✗</span>
                  )}
                  {selectedAnswer !== null && option.id === quizData.correctAnswer && selectedAnswer !== option.id && (
                    <span className="text-green-600 dark:text-green-400">✓</span>
                  )}
                </div>
                <span>{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>
      
      {showExplanation && quizData.explanation && (
        <div className="mt-4 ml-11 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h5 className="font-medium text-gray-900 dark:text-white mb-2">Explanation:</h5>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {quizData.explanation}
          </p>
        </div>
      )}
    </div>
  );
}; 