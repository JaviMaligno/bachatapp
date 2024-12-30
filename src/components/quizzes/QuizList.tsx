import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Quiz } from '../../types';
import { ProgressBar } from '../common/ProgressBar';

interface QuizListProps {
  quizzes: Quiz[];
  onSelectQuiz: (quiz: Quiz) => void;
}

export const QuizList: React.FC<QuizListProps> = ({ quizzes, onSelectQuiz }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-700">Quizzes</h2>
    {quizzes.map((quiz) => (
      <button
        key={quiz.id}
        onClick={() => onSelectQuiz(quiz)}
        className="w-full p-4 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Play className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-800">{quiz.title}</h3>
              <p className="text-sm text-gray-600">
                {quiz.type === 'missing' ? 'Identify missing instruments' : 'Identify present instruments'}
              </p>
              <ProgressBar progress={quiz.progress} />
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </button>
    ))}
  </div>
); 