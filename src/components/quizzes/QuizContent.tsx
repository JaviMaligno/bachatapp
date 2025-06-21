import React from 'react';
import { Quiz, RhythmBuildingQuiz } from '../../types';
import { InstrumentQuiz } from '../lessons/InstrumentQuiz';
import { progressManager } from '../common/ProgressBar';
import { HistoryQuiz } from '../lessons/HistoryQuiz';
import { RhythmBuildingQuizComponent } from './RhythmBuildingQuiz';

interface QuizContentProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
  onBack: () => void;
  sectionTitle: string;
}

export const INSTRUMENT_OPTIONS = ['Requinto', 'Segunda', 'Bass', 'Güira', 'Bongos'];
export const SECTION_OPTIONS = ['Verse', 'Chorus', 'Mambo', 'Intro', 'Outro'];
export const RHYTHM_OPTIONS = ['Derecho', 'Majao', 'Mambo', 'Non-Bachata'];
export const BACHATA_PARTS_OPTIONS = ['Derecho', 'Majao', 'Mambo', 'Non-Bachata'];

export const QuizContent: React.FC<QuizContentProps> = ({ 
  quiz, 
  onComplete, 
  onBack,
  sectionTitle
}) => {
  const handleQuizComplete = (score: number) => {
    const totalQuestions = quiz.type === 'rhythm-building' 
      ? (quiz as RhythmBuildingQuiz).challenges.length 
      : quiz.questions.length;
    
    // Save both the score and progress
    progressManager.setQuizScore(sectionTitle.toLowerCase(), quiz.id, score, totalQuestions);
    
    // Trigger the completion callback
    onComplete(score);
    
    // Dispatch event to update UI
    window.dispatchEvent(new Event('quizProgressUpdated'));
  };

  if (!quiz || !quiz.type) {
    return null;
  }

  if (quiz.type === 'history') {
    return (
      <HistoryQuiz
        questions={quiz.questions}
        onComplete={handleQuizComplete}
        onBack={onBack}
        sectionTitle={sectionTitle}
      />
    );
  }

  if (quiz.type === 'rhythm-building') {
    return (
      <RhythmBuildingQuizComponent
        quiz={quiz as RhythmBuildingQuiz}
        onBack={onBack}
        sectionId={sectionTitle.toLowerCase()}
      />
    );
  }

  return (
    <InstrumentQuiz 
      questions={quiz.questions} 
      onComplete={handleQuizComplete} 
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