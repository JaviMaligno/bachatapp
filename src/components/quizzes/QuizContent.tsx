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
export const SECTION_OPTIONS = ['Verse', 'Chorus', 'Mambo', 'Fake Mambo', 'Intro', 'Outro'];
export const RHYTHM_OPTIONS = ['Derecho', 'Majao', 'Mambo', 'Non-Bachata'];
export const BACHATA_PARTS_OPTIONS = ['Derecho', 'Majao', 'Mambo', 'Non-Bachata'];

export const QuizContent: React.FC<QuizContentProps> = ({ 
  quiz, 
  onComplete, 
  onBack,
  sectionTitle
}) => {
  if (!quiz || !quiz.type) {
    return null;
  }

  return (
    <InstrumentQuiz 
      questions={quiz.questions} 
      onComplete={onComplete} 
      mode={quiz.type}
      options={
        quiz.type === 'present' || quiz.type === 'missing' 
          ? INSTRUMENT_OPTIONS
          : quiz.type === 'sections'
          ? SECTION_OPTIONS
          : quiz.type === 'rhythms'
          ? RHYTHM_OPTIONS
          : BACHATA_PARTS_OPTIONS
      }
      onBack={onBack}
      sectionTitle={sectionTitle}
    />
  );
}; 