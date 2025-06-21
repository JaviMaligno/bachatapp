import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';
import { BackButton } from '../common/BackButton';
import { QuestionDisplay } from '../quizzes/QuestionDisplay';

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
    const isExactMatch = selected.length === correct.length &&
      selected.every(instrument => correct.includes(instrument)) &&
      correct.every(instrument => selected.includes(instrument));
    
    const isSubset = selected.length < correct.length &&
      selected.every(instrument => correct.includes(instrument));

    return {
      isCorrect: isExactMatch,
      isPartiallyCorrect: isSubset
    };
  };

  const handleSubmit = () => {
    if (!isSubmitted) {
      const result = checkAnswer(
        selectedInstruments, 
        questions[currentQuestion].correctAnswer
      );

      setIsCorrect(result.isCorrect);
      if (result.isCorrect) {
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
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg scale-[1.02]'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md';
    }

    if (showSolution || selectedInstruments.includes(instrument)) {
      const isCorrect = questions[currentQuestion].correctAnswer.includes(instrument);
      const wasSelected = selectedInstruments.includes(instrument);

      if (isCorrect) {
        return 'bg-gradient-to-r from-green-400 to-green-600 text-white border-transparent shadow-lg scale-[1.02]';
      }
      if (wasSelected) {
        return 'bg-gradient-to-r from-red-400 to-red-600 text-white border-transparent shadow-lg scale-[1.02]';
      }
    }

    return 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50';
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
      <BackButton onClick={onBack} label={`Back to ${sectionTitle} Section`} />
      
      <QuestionDisplay
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        question={`Question ${currentQuestion + 1}`}
        instructions={getInstructions()}
        className="mb-6"
      />

      <div className="mb-6">
        <audio
          ref={audioRef}
          src={questions[currentQuestion].audioUrl}
          onEnded={() => setIsPlaying(false)}
        />
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span className="font-medium">{isPlaying ? 'Pause' : 'Play'} Audio</span>
        </button>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
          Select your answer{mode === 'present' || mode === 'missing' ? '(s)' : ''}:
        </h4>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggleInstrument(option)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all transform hover:scale-[1.02] ${getButtonClass(option)}`}
          >
            <span className="font-medium text-lg">{option}</span>
          </button>
        ))}
      </div>

      {isSubmitted && !showSolution && (
        <div className="mt-6 animate-slideIn">
          {isCorrect ? (
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-5 rounded-xl shadow-xl flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              <div>
                <h4 className="font-bold text-lg">Excellent!</h4>
                <p>You got it right! Well done!</p>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-5 rounded-xl shadow-xl flex items-center gap-3">
              <span className="text-3xl">💪</span>
              <div>
                <h4 className="font-bold text-lg">Keep trying!</h4>
                <p>
                  {selectedInstruments.every(instrument => 
                    questions[currentQuestion].correctAnswer.includes(instrument)
                  ) ? (
                    "You're on the right track, but there are more answers to identify!"
                  ) : (
                    "That's not quite right. Give it another shot!"
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {currentQuestion === questions.length - 1 && isSubmitted && (showSolution || isCorrect) && (
        <div className="mt-6 p-5 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-xl shadow-xl animate-slideIn">
          <h4 className="font-bold text-xl mb-1">Quiz Complete! 🏆</h4>
          <p className="text-lg">Final Score: {score} out of {questions.length} questions</p>
        </div>
      )}

      <div className="mt-6 flex gap-4">
        {!isSubmitted && (
          <button
            onClick={handleSubmit}
            disabled={selectedInstruments.length === 0}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Submit Answer
          </button>
        )}
        
        {isSubmitted && !isCorrect && !showSolution && (
          <>
            <button
              onClick={handleRetry}
              className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              <RotateCcw className="w-4 h-4 inline mr-2" />
              Try Again
            </button>
            <button
              onClick={() => setShowSolution(true)}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              Show Solution
            </button>
          </>
        )}

        {isSubmitted && (isCorrect || showSolution) && (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Next Question
                <ChevronRight className="w-4 h-4 inline ml-2" />
              </>
            ) : (
              'Complete Quiz'
            )}
          </button>
        )}
      </div>
    </div>
  );
}; 