import React from 'react';
import { Quiz } from '../../types';
import { PresentInstrumentsQuiz } from '../lessons/PresentInstrumentsQuiz';
import { MissingInstrumentsQuiz } from '../lessons/MissingInstrumentsQuiz';

interface QuizContentProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
}

export const QuizContent: React.FC<QuizContentProps> = ({ quiz, onComplete }) => {
  if (!quiz || !quiz.type) {
    return null;
  }

  if (quiz.type === 'present') {
    return <PresentInstrumentsQuiz questions={quiz.questions} onComplete={onComplete} />;
  } else if (quiz.type === 'missing') {
    return <MissingInstrumentsQuiz questions={quiz.questions} onComplete={onComplete} />;
  }

  return null;
}; 