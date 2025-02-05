import React from 'react';
import { ChevronRight, CheckCircle, Play } from 'lucide-react';
import { Quiz } from '../../types';
import { ProgressBar, progressManager } from '../common/ProgressBar';

interface QuizListProps {
  quizzes: Quiz[];
  onSelectQuiz: (quiz: Quiz) => void;
  sectionId: string;
}

export const QuizList: React.FC<QuizListProps> = ({ quizzes, onSelectQuiz, sectionId }) => {
  return (
    <details className="group">
      <summary className="flex items-center justify-between p-4 cursor-pointer list-none 
        bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700
        hover:border-gray-300 dark:hover:border-gray-600 transition-all">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Quizzes</h2>
        <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
      </summary>
      
      <div className="space-y-4 mt-4">
        {quizzes.map((quiz) => {
          const scoreData = progressManager.getQuizScore(sectionId, quiz.id);
          const progress = scoreData ? (scoreData.score / scoreData.total) * 100 : 0;
          
          return (
            <div 
              key={quiz.id} 
              onClick={() => onSelectQuiz(quiz)}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  {progress === 100 ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <Play className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{quiz.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{quiz.description}</p>
                    <div className="mt-2">
                      <ProgressBar 
                        progress={progress} 
                        showScore={false}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {scoreData && (
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {scoreData.score}/{scoreData.total}
                    </div>
                  )}
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );
}; 