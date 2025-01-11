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
  } else if (quiz.type === 'rhythms') {
    return (
      <InstrumentQuiz 
        questions={quiz.questions} 
        onComplete={onComplete} 
        mode="present"
        options={RHYTHM_OPTIONS}
        onBack={onBack}
        sectionTitle={sectionTitle}
      />
    );
  } else if (quiz.type === 'parts') {
    return (
      <InstrumentQuiz 
        questions={quiz.questions} 
        onComplete={onComplete} 
        mode="present"
        options={BACHATA_PARTS_OPTIONS}
        onBack={onBack}
        sectionTitle={sectionTitle}
      />
    );
  }

  return null;
}; 