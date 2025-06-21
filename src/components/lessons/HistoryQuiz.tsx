import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { BackButton } from '../common/BackButton';
import { QuizSection } from './QuizSection';
import { QuestionDisplay } from '../quizzes/QuestionDisplay';

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
      
      <QuestionDisplay
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        question={questions[currentQuestion].question}
        className="mb-6"
      />

      <QuizSection
        key={currentQuestion}
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion].correctAnswer}
        onComplete={handleAnswer}
      />

      {showNext && (
        <div className="mt-6 animate-slideIn">
          {isCorrect && (
            <div className="mb-4 p-5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow-xl flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              <div>
                <h4 className="font-bold text-lg">Excellent!</h4>
                <p>You got it right! Well done!</p>
              </div>
            </div>
          )}
          
          {currentQuestion === questions.length - 1 && (
            <div className="mb-4 p-5 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-xl shadow-xl">
              <h4 className="font-bold text-xl mb-1">Quiz Complete! 🏆</h4>
              <p className="text-lg">Final Score: {score} out of {questions.length} questions</p>
            </div>
          )}

          <button
            onClick={handleNext}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
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