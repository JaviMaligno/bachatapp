import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';

interface QuizQuestion {
  id: number;
  audioUrl: string;
  correctInstruments: string[];
}

interface InstrumentQuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export const InstrumentQuiz: React.FC<InstrumentQuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const instruments = ['Requinto', 'Segunda', 'Bass', 'Güira', 'Bongos'];

  const toggleInstrument = (instrument: string) => {
    if (!isSubmitted) {
      setSelectedInstruments(prev => 
        prev.includes(instrument)
          ? prev.filter(i => i !== instrument)
          : [...prev, instrument]
      );
    }
  };

  const handleSubmit = () => {
    if (!isSubmitted) {
      const isCorrect = 
        selectedInstruments.length === questions[currentQuestion].correctInstruments.length &&
        selectedInstruments.every(instrument => 
          questions[currentQuestion].correctInstruments.includes(instrument)
        );

      if (isCorrect) {
        setScore(prev => prev + 1);
        setShowSolution(true);
      }
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedInstruments([]);
      setIsSubmitted(false);
      setShowSolution(false);
    } else {
      onComplete(score);
    }
  };

  const handleRetry = () => {
    setSelectedInstruments([]);
    setIsSubmitted(false);
    setShowSolution(false);
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
        ? 'bg-orange-100 border-orange-500'
        : 'bg-white border-gray-200 hover:border-gray-300';
    }

    if (showSolution || selectedInstruments.includes(instrument)) {
      const isCorrect = questions[currentQuestion].correctInstruments.includes(instrument);
      const wasSelected = selectedInstruments.includes(instrument);

      if (isCorrect) {
        return 'bg-green-50 border-green-500';
      }
      if (wasSelected) {
        return 'bg-red-50 border-red-500';
      }
    }

    return 'bg-white border-gray-200';
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h3>
      
      <div className="mb-6">
        <audio
          ref={audioRef}
          src={questions[currentQuestion].audioUrl}
          onEnded={() => setIsPlaying(false)}
        />
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-gray-300"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? 'Pause' : 'Play'} Audio
        </button>
      </div>

      <div className="space-y-3">
        {instruments.map((instrument) => (
          <button
            key={instrument}
            onClick={() => toggleInstrument(instrument)}
            className={`w-full p-4 text-left rounded-lg border transition-all ${getButtonClass(instrument)}`}
          >
            <span className="font-medium">{instrument}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedInstruments.length === 0}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        ) : (
          <>
            {!showSolution && (
              <button
                onClick={handleRetry}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                <RotateCcw className="w-4 h-4 inline mr-2" />
                Retry
              </button>
            )}
            {!showSolution && (
              <button
                onClick={() => setShowSolution(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Show Solution
              </button>
            )}
            {showSolution && (
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
          </>
        )}
      </div>
    </div>
  );
}; 