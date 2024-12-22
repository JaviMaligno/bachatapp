import React from 'react';
import { Play } from 'lucide-react';
import { Section, Lesson } from '../../types';
import { BackButton } from '../common/BackButton';
import { QuizSection } from './QuizSection';

interface LessonViewProps {
  section: Section;
  lesson: Lesson;
  onBack: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ section, lesson, onBack }) => {
  const handleQuizAnswer = (isCorrect: boolean) => {
    console.log('Answer is:', isCorrect ? 'correct' : 'incorrect');
  };

  return (
    <div className="p-6">
      <BackButton onClick={onBack} label={`Back to ${section.title}`} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{lesson.title}</h1>
        
        <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
          <Play className="w-12 h-12 text-gray-400" />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Lesson Overview</h2>
          <p className="text-gray-600">{lesson.description}</p>
        </div>
      </div>
    </div>
  );
};
