import React, { useState, useEffect } from 'react';
import { Section } from '../../types';
import { LessonsList } from '../lessons/LessonsList';
import { QuizList } from '../quizzes/QuizList';
import { BackButton } from '../common/BackButton';
import { GlossarySection } from '../../types/Lesson';

interface SectionContentProps {
  section: Section;
  onBack: () => void;
  onSelectLesson: (lesson: any) => void;
  onSelectQuiz: (quiz: any) => void;
  onSelectGlossary: (glossary: GlossarySection[]) => void;
}

const GlossaryPreview: React.FC<{ 
  glossary?: GlossarySection[], 
  onClick: () => void 
}> = ({ glossary, onClick }) => {
  if (!glossary?.length) return null;

  const totalTerms = glossary.reduce((sum, section) => sum + section.terms.length, 0);

  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Glossary</h2>
      <p className="text-gray-600 dark:text-gray-300">{totalTerms} terms across {glossary.length} categories</p>
    </div>
  );
};

export const SectionContent: React.FC<SectionContentProps> = ({
  section,
  onBack,
  onSelectLesson,
  onSelectQuiz,
  onSelectGlossary
}) => {
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const handleProgressUpdate = () => {
      setUpdateTrigger(prev => prev + 1);
    };
    
    window.addEventListener('lessonProgressUpdated', handleProgressUpdate);
    return () => window.removeEventListener('lessonProgressUpdated', handleProgressUpdate);
  }, []);

  return (
    <div className="p-6">
      <BackButton onClick={onBack} label="Back to Menu" />
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{section.title}</h1>
      
      <div className="space-y-6">
        <LessonsList
          key={updateTrigger}
          section={section}
          onSelectLesson={onSelectLesson}
        />
        
        {section.quizzes && section.quizzes.length > 0 && (
          <QuizList
            quizzes={section.quizzes}
            onSelectQuiz={onSelectQuiz}
            sectionId={section.id}
          />
        )}

        {section.glossary && (
          <GlossaryPreview
            glossary={section.glossary}
            onClick={() => onSelectGlossary(section.glossary!)}
          />
        )}
      </div>
    </div>
  );
}; 