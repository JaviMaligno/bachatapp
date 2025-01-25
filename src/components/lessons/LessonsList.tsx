import React from 'react';
import { CheckCircle, ChevronRight, Play, Ban } from 'lucide-react';
import { Section, LessonSummary } from '../../types';
import { ProgressBar } from '../common/ProgressBar';

interface LessonsListProps {
  section: Section;
  onSelectLesson: (lesson: LessonSummary) => void;
}

export const LessonsList: React.FC<LessonsListProps> = ({ 
  section, 
  onSelectLesson 
}) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Lessons</h2>
    {section.lessons?.map((lesson) => (
      <div key={lesson.id} className="relative">
        <button
          onClick={() => !lesson.comingSoon && onSelectLesson(lesson)}
          className={`w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
            ${lesson.comingSoon ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-300 dark:hover:border-gray-600'} 
            transition-all`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {lesson.progress === 100 ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <Play className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
              )}
              <div className="text-left">
                <h3 className="font-medium text-gray-800 dark:text-white">{lesson.title}</h3>
                <ProgressBar progress={lesson.progress ?? 0} />
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>
        
        {lesson.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-lg">
              <Ban className="w-5 h-5" />
              <span className="font-semibold">Coming Soon</span>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
); 