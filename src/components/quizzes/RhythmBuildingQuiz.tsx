import React, { useState } from 'react';
import { ChevronLeft, CheckCircle, RotateCcw } from 'lucide-react';
import { RhythmBuildingQuiz } from '../../types';
import { BuildAClave } from '../interactive/BuildAClave';
import { BuildMamboPattern } from '../interactive/BuildMamboPattern';
import { BuildAClaveData, BuildMamboData } from '../../types/Lesson';
import { progressManager } from '../common/ProgressBar';

interface RhythmBuildingQuizProps {
  quiz: RhythmBuildingQuiz;
  onBack: () => void;
  sectionId: string;
}

export const RhythmBuildingQuizComponent: React.FC<RhythmBuildingQuizProps> = ({ 
  quiz, 
  onBack, 
  sectionId 
}) => {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  const currentChallenge = quiz.challenges[currentChallengeIndex];
  const totalChallenges = quiz.challenges.length;
  const completedCount = completedChallenges.size;

  const handleChallengeComplete = (challengeId: string) => {
    const newCompleted = new Set(completedChallenges);
    newCompleted.add(challengeId);
    setCompletedChallenges(newCompleted);

    // Update progress
    const progress = (newCompleted.size / totalChallenges) * 100;
    progressManager.updateQuizScore(sectionId, quiz.id, newCompleted.size, totalChallenges);

    // If all challenges completed, show results
    if (newCompleted.size === totalChallenges) {
      setShowResults(true);
    }
  };

  const nextChallenge = () => {
    if (currentChallengeIndex < totalChallenges - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
    }
  };

  const prevChallenge = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(currentChallengeIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentChallengeIndex(0);
    setCompletedChallenges(new Set());
    setShowResults(false);
    progressManager.updateQuizScore(sectionId, quiz.id, 0, totalChallenges);
  };

  const renderRhythmComponent = (challenge: typeof currentChallenge) => {
    if (challenge.rhythmType === 'mambo') {
      const mamboData: BuildMamboData = {
        id: challenge.id,
        title: challenge.title,
        instructions: challenge.instructions,
        pattern: challenge.pattern as (0 | 1 | 2)[],
        bpm: challenge.bpm,
        explanation: challenge.explanation
      };

      return (
        <BuildMamboPattern 
          key={challenge.id}
          data={mamboData}
          onComplete={() => handleChallengeComplete(challenge.id)}
        />
      );
    } else {
      const claveData: BuildAClaveData = {
        id: challenge.id,
        title: challenge.title,
        instructions: challenge.instructions,
        pattern: challenge.pattern as (0 | 1 | 2)[],
        bpm: challenge.bpm,
        explanation: challenge.explanation
      };

      return (
        <BuildAClave 
          key={challenge.id}
          data={claveData}
          onComplete={() => handleChallengeComplete(challenge.id)}
        />
      );
    }
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Congratulations! 🎉
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            You've successfully built all three bachata rhythms!
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
            <p className="text-green-800 dark:text-green-200 font-semibold">
              Perfect Score: {completedCount}/{totalChallenges} rhythms completed
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Quizzes
        </button>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Challenge {currentChallengeIndex + 1} of {totalChallenges}
        </div>
      </div>

      {/* Quiz Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {quiz.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {quiz.description}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progress
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {completedCount}/{totalChallenges} completed
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedCount / totalChallenges) * 100}%` }}
          />
        </div>
      </div>

      {/* Challenge Status Indicators */}
      <div className="flex justify-center gap-4 mb-8">
        {quiz.challenges.map((challenge, index) => (
          <div
            key={challenge.id}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              index === currentChallengeIndex
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                : completedChallenges.has(challenge.id)
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setCurrentChallengeIndex(index)}
          >
            {completedChallenges.has(challenge.id) && (
              <CheckCircle className="w-4 h-4" />
            )}
            <span className="capitalize">{challenge.rhythmType}</span>
          </div>
        ))}
      </div>

      {/* Current Challenge */}
      <div className="mb-8">
        {renderRhythmComponent(currentChallenge)}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevChallenge}
          disabled={currentChallengeIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            currentChallengeIndex === 0
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-gray-500 hover:bg-gray-600 text-white'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {completedChallenges.has(currentChallenge.id) ? (
              <span className="text-green-600 dark:text-green-400 font-medium">
                ✓ Rhythm completed!
              </span>
            ) : (
              'Complete the rhythm to continue'
            )}
          </p>
        </div>

        <button
          onClick={nextChallenge}
          disabled={currentChallengeIndex === totalChallenges - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            currentChallengeIndex === totalChallenges - 1
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Next
          <ChevronLeft className="w-4 h-4 rotate-180" />
        </button>
      </div>
    </div>
  );
}; 