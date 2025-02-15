import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { BackButton } from '../common/BackButton';
import { QuizSection } from './QuizSection';

interface HistoryQuizProps {
  questions: {
    id: number;
    question: string;
    options: { id: string; text: string; }[];
    correctAnswer: string;
  }[];
  onComplete: (score: number) => void;
  onBack: () => void;
  sectionTitle: string;
}

export const HistoryQuiz: React.FC<HistoryQuizProps> = ({
  questions,
  onComplete,
  onBack,
  sectionTitle
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setIsCorrect(isCorrect);
    setShowNext(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowNext(false);
      setIsCorrect(false);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
      <BackButton onClick={onBack} label={`Back to ${sectionTitle} Section`} />
      
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Question {currentQuestion + 1} of {questions.length}
      </h3>

      <QuizSection
        key={currentQuestion}
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion].correctAnswer}
        onComplete={handleAnswer}
      />

      {showNext && (
        <div className="mt-6">
          {isCorrect && (
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg">
              Well done! That's correct! 🎉
            </div>
          )}
          
          {currentQuestion === questions.length - 1 && (
            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg">
              Final Score: {score} out of {questions.length} questions
            </div>
          )}

          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Next
                <ChevronRight className="w-4 h-4 inline ml-2" />
              </>
            ) : (
              'Finish'
            )}
          </button>
        </div>
      )}
    </div>
  );
}; 