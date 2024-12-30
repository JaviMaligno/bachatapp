import React from 'react';
import { CheckCircle, ChevronRight, Play } from 'lucide-react';
import { Section, LessonSummary } from '../../types';
import { BackButton } from '../common/BackButton';
import { ProgressBar } from '../common/ProgressBar';

interface LessonsListProps {
  section: Section;
  onSelectLesson: (lesson: LessonSummary) => void;
}

export const LessonsList: React.FC<LessonsListProps> = ({ 
  section, 
  onSelectLesson 
}) => (
  <div className="p-6">
    <BackButton onClick={() => {}} label="Back to Menu" />
    <h1 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h1>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Lessons</h2>
      {section.lessons?.map((lesson) => (
        <button
          key={lesson.id}
          onClick={() => onSelectLesson(lesson)}
          className="w-full p-4 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {lesson.progress === 100 ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Play className="w-4 h-4 text-gray-600" />
                </div>
              )}
              <div className="text-left">
                <h3 className="font-medium text-gray-800">{lesson.title}</h3>
                <ProgressBar progress={lesson.progress ?? 0} />
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      ))}
    </div>
  </div>
); 