import React from 'react';
import { Section } from '../../types';
import { LessonsList } from '../lessons/LessonsList';
import { QuizList } from '../quizzes/QuizList';
import { BackButton } from '../common/BackButton';

interface SectionContentProps {
  section: Section;
  onBack: () => void;
  onSelectLesson: (lesson: any) => void;
  onSelectQuiz: (quiz: any) => void;
}

export const SectionContent: React.FC<SectionContentProps> = ({
  section,
  onBack,
  onSelectLesson,
  onSelectQuiz
}) => (
  <div className="p-6">
    <BackButton onClick={onBack} label="Back to Menu" />
    <h1 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h1>
    
    <div className="space-y-8">
      <LessonsList 
        section={section} 
        onSelectLesson={onSelectLesson} 
      />
      
      {section.quizzes && section.quizzes.length > 0 && (
        <QuizList 
          quizzes={section.quizzes} 
          onSelectQuiz={onSelectQuiz} 
        />
      )}
    </div>
  </div>
); 