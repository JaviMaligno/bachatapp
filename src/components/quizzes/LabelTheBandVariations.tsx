import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import confetti from 'canvas-confetti';
import { LabelTheBandQuiz } from '../../types';
import { progressManager } from '../common/ProgressBar';
import {
  DraggableAudio,
  DraggableName,
  SilhouetteDropZone,
  NameDropZone,
  StageLayout,
  InstrumentData,
  PositionData
} from './shared/LabelTheBandShared';

interface LabelTheBandVariationProps {
  quiz: LabelTheBandQuiz;
  onBack: () => void;
  sectionId: string;
}

// Common Quiz Layout Component
const QuizLayout: React.FC<{
  title: string;
  instructions: string;
  children: React.ReactNode;
  onCheckAnswers: () => void;
  onReset: () => void;
  showResults: boolean;
  isCompleted: boolean;
  placementsCount: number;
  results?: React.ReactNode;
  explanation?: string;
}> = ({ 
  title, 
  instructions, 
  children, 
  onCheckAnswers, 
  onReset, 
  showResults, 
  isCompleted, 
  placementsCount,
  results,
  explanation 
}) => {
  return (
    <div className="my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-bold">🎵</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {instructions}
      </p>

      {children}

      {/* Controls */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={onCheckAnswers}
          disabled={placementsCount === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Check Answers
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {showResults && results}

      {/* Explanation */}
      {isCompleted && explanation && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
            💡 Did you know?
          </h4>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
};

// 1. Audio to Silhouette Quiz (existing LabelTheBand functionality)
export const AudioToSilhouetteQuiz: React.FC<LabelTheBandVariationProps> = ({ quiz, onBack, sectionId }) => {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDrop = useCallback((instrumentId: string, positionId: string) => {
    setPlacements(prev => {
      const newPlacements = { ...prev };
      Object.keys(newPlacements).forEach(key => {
        if (newPlacements[key] === instrumentId) {
          delete newPlacements[key];
        }
      });
      newPlacements[positionId] = instrumentId;
      return newPlacements;
    });
    setShowResults(false);
  }, []);

  const checkAnswers = () => {
    setShowResults(true);
    const allCorrect = quiz.positions.every(position => {
      const placedInstrument = placements[position.id];
      if (!placedInstrument) return false;
      const instrument = quiz.instruments.find(i => i.id === placedInstrument);
      return instrument?.name.toLowerCase() === position.label.toLowerCase();
    });

    if (allCorrect && quiz.positions.length === Object.keys(placements).length) {
      setIsCompleted(true);
      const score = quiz.positions.length;
      progressManager.setQuizScore(sectionId, quiz.id, score, quiz.positions.length);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      window.dispatchEvent(new Event('quizProgressUpdated'));
    }
  };

  const reset = () => {
    setPlacements({});
    setShowResults(false);
    setIsCompleted(false);
  };

  const isInstrumentUsed = (instrumentId: string) => {
    return Object.values(placements).includes(instrumentId);
  };

  const isPositionCorrect = (positionId: string) => {
    if (!showResults) return null;
    const placedInstrument = placements[positionId];
    if (!placedInstrument) return false;
    const instrument = quiz.instruments.find(i => i.id === placedInstrument);
    const position = quiz.positions.find(p => p.id === positionId);
    return instrument?.name.toLowerCase() === position?.label.toLowerCase();
  };

  const getInstrumentNameById = (instrumentId: string) => {
    return quiz.instruments.find(i => i.id === instrumentId)?.name || '';
  };

  const results = (
    <div className={`p-4 rounded-lg ${isCompleted ? 'bg-green-100 border border-green-300' : 'bg-yellow-100 border border-yellow-300'}`}>
      <h4 className={`font-medium ${isCompleted ? 'text-green-800' : 'text-yellow-800'}`}>
        {isCompleted ? '🎉 Perfect! You correctly identified and positioned all instruments!' : '📝 Review your answers:'}
      </h4>
      {!isCompleted && (
        <ul className="mt-2 text-sm text-yellow-700">
          {quiz.positions.map(position => {
            const placedInstrument = placements[position.id];
            const isCorrect = isPositionCorrect(position.id);
            return (
              <li key={position.id} className="flex items-center">
                <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                  {isCorrect ? '✓' : '✗'}
                </span>
                <span className="ml-2">
                  {position.label} silhouette: {placedInstrument ? `${getInstrumentNameById(placedInstrument)} audio` : 'Empty'}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <QuizLayout
        title={quiz.title}
        instructions={quiz.instructions}
        onCheckAnswers={checkAnswers}
        onReset={reset}
        showResults={showResults}
        isCompleted={isCompleted}
        placementsCount={Object.keys(placements).length}
        results={results}
        explanation={quiz.explanation}
      >
        {/* Stage Layout */}
        <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 relative" style={{ height: '420px' }}>
          <StageLayout />
          
          {/* Drop Zones */}
          {quiz.positions.map(position => (
            <SilhouetteDropZone
              key={position.id}
              position={position}
              droppedItem={placements[position.id] ? getInstrumentNameById(placements[position.id]) : null}
              onDrop={handleDrop}
              isCorrect={isPositionCorrect(position.id)}
              acceptType="audio"
            />
          ))}
        </div>

        {/* Audio Players */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
            Listen to the audio samples and drag them to their matching instrument silhouettes:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quiz.instruments.map(instrument => (
              <DraggableAudio
                key={instrument.id}
                instrument={instrument}
                isUsed={isInstrumentUsed(instrument.id)}
              />
            ))}
          </div>
        </div>
      </QuizLayout>
    </DndProvider>
  );
};

// 2. Name to Silhouette Quiz
export const NameToSilhouetteQuiz: React.FC<LabelTheBandVariationProps> = ({ quiz, onBack, sectionId }) => {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDrop = useCallback((instrumentId: string, positionId: string) => {
    setPlacements(prev => {
      const newPlacements = { ...prev };
      Object.keys(newPlacements).forEach(key => {
        if (newPlacements[key] === instrumentId) {
          delete newPlacements[key];
        }
      });
      newPlacements[positionId] = instrumentId;
      return newPlacements;
    });
    setShowResults(false);
  }, []);

  const checkAnswers = () => {
    setShowResults(true);
    const allCorrect = quiz.positions.every(position => {
      const placedInstrument = placements[position.id];
      if (!placedInstrument) return false;
      const instrument = quiz.instruments.find(i => i.id === placedInstrument);
      return instrument?.name.toLowerCase() === position.label.toLowerCase();
    });

    if (allCorrect && quiz.positions.length === Object.keys(placements).length) {
      setIsCompleted(true);
      const score = quiz.positions.length;
      progressManager.setQuizScore(sectionId, quiz.id, score, quiz.positions.length);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      window.dispatchEvent(new Event('quizProgressUpdated'));
    }
  };

  const reset = () => {
    setPlacements({});
    setShowResults(false);
    setIsCompleted(false);
  };

  const isInstrumentUsed = (instrumentId: string) => {
    return Object.values(placements).includes(instrumentId);
  };

  const isPositionCorrect = (positionId: string) => {
    if (!showResults) return null;
    const placedInstrument = placements[positionId];
    if (!placedInstrument) return false;
    const instrument = quiz.instruments.find(i => i.id === placedInstrument);
    const position = quiz.positions.find(p => p.id === positionId);
    return instrument?.name.toLowerCase() === position?.label.toLowerCase();
  };

  const getInstrumentNameById = (instrumentId: string) => {
    return quiz.instruments.find(i => i.id === instrumentId)?.name || '';
  };

  const results = (
    <div className={`p-4 rounded-lg ${isCompleted ? 'bg-green-100 border border-green-300' : 'bg-yellow-100 border border-yellow-300'}`}>
      <h4 className={`font-medium ${isCompleted ? 'text-green-800' : 'text-yellow-800'}`}>
        {isCompleted ? '🎉 Perfect! You correctly matched all instrument names to their silhouettes!' : '📝 Review your answers:'}
      </h4>
      {!isCompleted && (
        <ul className="mt-2 text-sm text-yellow-700">
          {quiz.positions.map(position => {
            const placedInstrument = placements[position.id];
            const isCorrect = isPositionCorrect(position.id);
            return (
              <li key={position.id} className="flex items-center">
                <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                  {isCorrect ? '✓' : '✗'}
                </span>
                <span className="ml-2">
                  {position.label} silhouette: {placedInstrument ? `${getInstrumentNameById(placedInstrument)} name` : 'Empty'}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <QuizLayout
        title={quiz.title}
        instructions={quiz.instructions}
        onCheckAnswers={checkAnswers}
        onReset={reset}
        showResults={showResults}
        isCompleted={isCompleted}
        placementsCount={Object.keys(placements).length}
        results={results}
        explanation={quiz.explanation}
      >
        {/* Stage Layout */}
        <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 relative" style={{ height: '420px' }}>
          <StageLayout />
          
          {/* Drop Zones */}
          {quiz.positions.map(position => (
            <SilhouetteDropZone
              key={position.id}
              position={position}
              droppedItem={placements[position.id] ? getInstrumentNameById(placements[position.id]) : null}
              onDrop={handleDrop}
              isCorrect={isPositionCorrect(position.id)}
              acceptType="name"
            />
          ))}
        </div>

        {/* Instrument Names */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
            Drag the instrument names to their matching silhouettes on stage:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quiz.instruments.map(instrument => (
              <DraggableName
                key={instrument.id}
                instrument={instrument}
                isUsed={isInstrumentUsed(instrument.id)}
              />
            ))}
          </div>
        </div>
      </QuizLayout>
    </DndProvider>
  );
};

// 3. Audio to Name Quiz
export const AudioToNameQuiz: React.FC<LabelTheBandVariationProps> = ({ quiz, onBack, sectionId }) => {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Shuffle the instruments for drop zones to make it more challenging
  const [shuffledInstruments] = useState(() => {
    const shuffled = [...quiz.instruments];
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  const handleDrop = useCallback((audioId: string, instrumentId: string) => {
    setPlacements(prev => {
      const newPlacements = { ...prev };
      Object.keys(newPlacements).forEach(key => {
        if (newPlacements[key] === audioId) {
          delete newPlacements[key];
        }
      });
      newPlacements[instrumentId] = audioId;
      return newPlacements;
    });
    setShowResults(false);
  }, []);

  const checkAnswers = () => {
    setShowResults(true);
    const allCorrect = quiz.instruments.every(instrument => {
      const placedAudio = placements[instrument.id];
      return placedAudio === instrument.id; // audio ID matches instrument ID
    });

    if (allCorrect && quiz.instruments.length === Object.keys(placements).length) {
      setIsCompleted(true);
      const score = quiz.instruments.length;
      progressManager.setQuizScore(sectionId, quiz.id, score, quiz.instruments.length);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      window.dispatchEvent(new Event('quizProgressUpdated'));
    }
  };

  const reset = () => {
    setPlacements({});
    setShowResults(false);
    setIsCompleted(false);
  };

  const isAudioUsed = (audioId: string) => {
    return Object.values(placements).includes(audioId);
  };

  const isInstrumentCorrect = (instrumentId: string) => {
    if (!showResults) return null;
    const placedAudio = placements[instrumentId];
    return placedAudio === instrumentId;
  };

  const results = (
    <div className={`p-4 rounded-lg ${isCompleted ? 'bg-green-100 border border-green-300' : 'bg-yellow-100 border border-yellow-300'}`}>
      <h4 className={`font-medium ${isCompleted ? 'text-green-800' : 'text-yellow-800'}`}>
        {isCompleted ? '🎉 Perfect! You correctly matched all audio samples to their instrument names!' : '📝 Review your answers:'}
      </h4>
      {!isCompleted && (
        <ul className="mt-2 text-sm text-yellow-700">
          {quiz.instruments.map(instrument => {
            const hasAudio = placements[instrument.id];
            const isCorrect = isInstrumentCorrect(instrument.id);
            return (
              <li key={instrument.id} className="flex items-center">
                <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                  {isCorrect ? '✓' : '✗'}
                </span>
                <span className="ml-2">
                  {instrument.name}: {hasAudio ? 'Audio sample placed' : 'Empty'}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <QuizLayout
        title={quiz.title}
        instructions={quiz.instructions}
        onCheckAnswers={checkAnswers}
        onReset={reset}
        showResults={showResults}
        isCompleted={isCompleted}
        placementsCount={Object.keys(placements).length}
        results={results}
        explanation={quiz.explanation}
      >
        {/* Audio Players - keep in original order */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
            Listen to the audio samples and drag them to their matching instrument names:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {quiz.instruments.map(instrument => (
              <DraggableAudio
                key={instrument.id}
                instrument={instrument}
                isUsed={isAudioUsed(instrument.id)}
              />
            ))}
          </div>
        </div>

        {/* Instrument Name Drop Zones - shuffled order */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
            Drop zones for instrument names:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {shuffledInstruments.map(instrument => (
              <NameDropZone
                key={instrument.id}
                instrument={instrument}
                droppedItem={placements[instrument.id] || null}
                onDrop={handleDrop}
                isCorrect={isInstrumentCorrect(instrument.id)}
              />
            ))}
          </div>
        </div>
      </QuizLayout>
    </DndProvider>
  );
}; 