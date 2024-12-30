import React from 'react';
import { InstrumentQuiz, InstrumentQuizProps } from './InstrumentQuiz';

type QuizProps = {
  questions: InstrumentQuizProps['questions'];
  onComplete: InstrumentQuizProps['onComplete'];
};

export const MissingInstrumentsQuiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  return (
    <InstrumentQuiz 
      questions={questions} 
      onComplete={onComplete} 
      mode="missing" 
    />
  );
}; 