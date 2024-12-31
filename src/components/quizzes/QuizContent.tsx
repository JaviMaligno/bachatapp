import React from 'react';
import { Quiz } from '../../types';
import { InstrumentQuiz } from '../lessons/InstrumentQuiz';

interface QuizContentProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
  onBack: () => void;
  sectionTitle: string;
}

export const INSTRUMENT_OPTIONS = ['Requinto', 'Segunda', 'Bass', 'Güira', 'Bongos'];
export const SECTION_OPTIONS = ['Derecho', 'Majao', 'Mambo', 'Non-Bachata'];

export const QuizContent: React.FC<QuizContentProps> = ({ 
  quiz, 
  onComplete, 
  onBack,
  sectionTitle
}) => {
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
        onBack={onBack}
        sectionTitle={sectionTitle}
      />
    );
  } else if (quiz.type === 'missing') {
    return (
      <InstrumentQuiz 
        questions={quiz.questions} 
        onComplete={onComplete} 
        mode="missing"
        options={INSTRUMENT_OPTIONS}
        onBack={onBack}
        sectionTitle={sectionTitle}
      />
    );
  } else if (quiz.type === 'sections') {
    return (
      <InstrumentQuiz 
        questions={quiz.questions} 
        onComplete={onComplete} 
        mode="present"
        options={SECTION_OPTIONS}
        onBack={onBack}
        sectionTitle={sectionTitle}
      />
    );
  }

  return null;
}; 