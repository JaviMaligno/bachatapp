import React from 'react';
import { Quiz } from '../../types';
import { InstrumentQuiz } from '../lessons/InstrumentQuiz';

interface QuizContentProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
}

export const INSTRUMENT_OPTIONS = ['Requinto', 'Segunda', 'Bass', 'Güira', 'Bongos'];
export const SECTION_OPTIONS = ['Derecho', 'Majao', 'Mambo', 'Non-Bachata'];

export const QuizContent: React.FC<QuizContentProps> = ({ quiz, onComplete }) => {
  if (!quiz || !quiz.type) {
    return null;
  }

  if (quiz.type === 'present') {
    return (
      <InstrumentQuiz 
        questions={quiz.questions} 
        onComplete={onComplete} 
        mode="present"
        options={INSTRUMENT_OPTIONS}
      />
    );
  } else if (quiz.type === 'missing') {
    return (
      <InstrumentQuiz 
        questions={quiz.questions} 
        onComplete={onComplete} 
        mode="missing"
        options={INSTRUMENT_OPTIONS}
      />
    );
  } else if (quiz.type === 'sections') {
    return (
      <InstrumentQuiz 
        questions={quiz.questions} 
        onComplete={onComplete} 
        mode="present"
        options={SECTION_OPTIONS}
      />
    );
  }

  return null;
}; 