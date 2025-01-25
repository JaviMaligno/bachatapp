import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';
import { BackButton } from '../common/BackButton';

interface QuizQuestion {
  id: number;
  audioUrl: string;
  correctAnswer: string[];
}

export interface InstrumentQuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  mode: 'present' | 'missing' | 'sections' | 'rhythms' | 'parts';
  options: string[];
  onBack: () => void;
  sectionTitle: string;
}

export const InstrumentQuiz: React.FC<InstrumentQuizProps> = ({ 
  questions, 
  onComplete, 
  mode, 
  options,
  onBack,
  sectionTitle
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleInstrument = (instrument: string) => {
    if (!isSubmitted) {
      setSelectedInstruments(prev => 
        prev.includes(instrument)
          ? prev.filter(i => i !== instrument)
          : [...prev, instrument]
      );
    }
  };

  const getInstructions = () => {
    const instructions = {
      present: 'Listen to the audio and select which instruments are playing.',
      missing: 'Listen to the audio and select which instruments are missing from the recording.',
      sections: 'Identify the musical section.',
      parts: 'Identify derecho, majao and mambo sections.',
      rhythms: 'Listen to the audio and identify the rhythm pattern.'
    };
    return instructions[mode] || instructions.present;
  };

  const checkAnswer = (selected: string[], correct: string[]) => {
    return selected.length === correct.length &&
      selected.every(instrument => correct.includes(instrument)) &&
      correct.every(instrument => selected.includes(instrument));
  };

  const handleSubmit = () => {
    if (!isSubmitted) {
      const correct = checkAnswer(
        selectedInstruments, 
        questions[currentQuestion].correctAnswer
      );

      setIsCorrect(correct);
      if (correct) {
        setScore(prev => prev + 1);
      }
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      
      setCurrentQuestion(prev => prev + 1);
      setSelectedInstruments([]);
      setIsSubmitted(false);
      setShowSolution(false);
      setIsCorrect(false);
    } else {
      onComplete(score);
    }
  };

  const handleRetry = () => {
    setSelectedInstruments([]);
    setIsSubmitted(false);
    setShowSolution(false);
    setIsCorrect(false);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getButtonClass = (instrument: string) => {
    if (!isSubmitted) {
      return selectedInstruments.includes(instrument)
        ? 'bg-orange-100 dark:bg-orange-900/20 border-orange-500 dark:border-orange-400'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600';
    }

    if (showSolution || selectedInstruments.includes(instrument)) {
      const isCorrect = questions[currentQuestion].correctAnswer.includes(instrument);
      const wasSelected = selectedInstruments.includes(instrument);

      if (isCorrect) {
        return 'bg-green-50 dark:bg-green-900 border-green-500';
      }
      if (wasSelected) {
        return 'bg-red-50 dark:bg-red-900 border-red-500';
      }
    }

    return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700';
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
      <BackButton onClick={onBack} label={`Back to ${sectionTitle} Section`} />
      
      <h3 className="text-lg font-semibold mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h3>
      
      <p className="mb-4 text-gray-600">
        {getInstructions()}
      </p>

      <div className="mb-6">
        <audio
          ref={audioRef}
          src={questions[currentQuestion].audioUrl}
          onEnded={() => setIsPlaying(false)}
        />
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
        >
          {isPlaying ? <Pause className="w-4 h-4 text-gray-600 dark:text-gray-300" /> : <Play className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
          <span className="text-gray-600 dark:text-gray-300">{isPlaying ? 'Pause' : 'Play'} Audio</span>
        </button>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggleInstrument(option)}
            className={`w-full p-4 text-left rounded-lg border transition-all ${getButtonClass(option)}`}
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>

      {isSubmitted && !showSolution && isCorrect && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
          Well done! That's correct! 🎉
        </div>
      )}

      {currentQuestion === questions.length - 1 && isSubmitted && (showSolution || isCorrect) && (
        <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-lg">
          Final Score: {score} out of {questions.length} questions
        </div>
      )}

      <div className="mt-6 flex gap-4">
        {!isSubmitted && (
          <button
            onClick={handleSubmit}
            disabled={selectedInstruments.length === 0}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        )}
        
        {isSubmitted && !isCorrect && !showSolution && (
          <>
            <button
              onClick={handleRetry}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              <RotateCcw className="w-4 h-4 inline mr-2" />
              Retry
            </button>
            <button
              onClick={() => setShowSolution(true)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Show Solution
            </button>
          </>
        )}

        {isSubmitted && (isCorrect || showSolution) && (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Next
                <ChevronRight className="w-4 h-4 inline ml-2" />
              </>
            ) : (
              'Finish'
            )}
          </button>
        )}
      </div>
    </div>
  );
}; 