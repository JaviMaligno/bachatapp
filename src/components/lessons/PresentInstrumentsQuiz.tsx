import React from 'react';
import { InstrumentQuiz, InstrumentQuizProps } from './InstrumentQuiz';

type QuizProps = {
  questions: InstrumentQuizProps['questions'];
  onComplete: InstrumentQuizProps['onComplete'];
};

export const PresentInstrumentsQuiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  return (
    <InstrumentQuiz 
      questions={questions} 
      onComplete={onComplete} 
      mode="present" 
    />
  );
}; 