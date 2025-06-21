import React, { useState, useRef, useEffect } from 'react';
import { BeatState } from '../../types/Lesson';
import confetti from 'canvas-confetti';

interface BuildMamboData {
  id: string;
  title: string;
  instructions: string;
  pattern: BeatState[]; // 16 sixteenth notes for one bar
  bpm: number;
  explanation?: string;
}

interface BuildMamboPatternProps {
  data: BuildMamboData;
  onComplete?: () => void;
}

export const BuildMamboPattern: React.FC<BuildMamboPatternProps> = ({ data, onComplete }) => {
  const [userPattern, setUserPattern] = useState<BeatState[]>(new Array(16).fill(0));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize audio context on first user interaction
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };
    window.addEventListener('click', initAudio, { once: true });
    return () => window.removeEventListener('click', initAudio);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const playClick = (beatState: BeatState) => {
    if (!audioContextRef.current || beatState === 0) return;

    const frequency = beatState === 1 ? 800 : 400; // Normal vs. Accent pitch
    
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1);
    
    oscillator.start(audioContextRef.current.currentTime);
    oscillator.stop(audioContextRef.current.currentTime + 0.1);
  };

  const toggleBeat = (index: number) => {
    const newPattern = [...userPattern];
    const currentState = newPattern[index];
    const nextState = ((currentState + 1) % 3) as BeatState;
    newPattern[index] = nextState;
    
    setUserPattern(newPattern);
    setShowFeedback(false);
    
    playClick(nextState);
  };

  const playPattern = () => {
    if (isPlaying) {
      stopPattern();
      return;
    }

    setIsPlaying(true);
    let beatIndex = 0;
    const beatDuration = 60000 / (data.bpm * 4); // 16th notes

    const playBeat = () => {
      setCurrentBeat(beatIndex);
      playClick(userPattern[beatIndex]);
      
      beatIndex = (beatIndex + 1) % 16;
      
      if (beatIndex === 0) {
        // Loop completed
        setTimeout(() => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            setCurrentBeat(null);
          }
        }, beatDuration);
      }
    };

    playBeat(); // Play first beat immediately
    intervalRef.current = setInterval(playBeat, beatDuration);
  };

  const stopPattern = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
    setCurrentBeat(null);
  };

  const checkPattern = () => {
    const correct = userPattern.every((beat, index) => beat === data.pattern[index]);
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      playPattern(); // Play the correct pattern
      onComplete?.(); // Call completion callback if provided
    }
  };

  const resetPattern = () => {
    setUserPattern(new Array(16).fill(0));
    setShowFeedback(false);
    stopPattern();
  };

  const showSolution = () => {
    setUserPattern([...data.pattern]);
    setShowFeedback(false);
  };

  const getBeatButtonClass = (beatState: BeatState) => {
    switch (beatState) {
      case 1:
        return 'bg-blue-500 border-blue-600 shadow-lg transform scale-105';
      case 2:
        return 'bg-purple-600 border-purple-700 shadow-lg transform scale-105';
      default:
        return 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-400';
    }
  };

  const getBeatLabel = (index: number) => {
    const beatNumber = Math.floor(index / 4) + 1;
    const subdivision = index % 4;
    
    switch (subdivision) {
      case 0: return beatNumber.toString();
      case 1: return 'e';
      case 2: return '&';
      case 3: return 'a';
      default: return '';
    }
  };

  return (
    <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🎵</span>
        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
          {data.title}
        </h3>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-6">{data.instructions}</p>
      
      {/* Beat Grid - Two rows of 8 for 16 sixteenth notes */}
      <div className="mb-6">
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* First row - beats 1-2 */}
          <div className="grid grid-cols-8 gap-2">
            {userPattern.slice(0, 8).map((beatState, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {getBeatLabel(index)}
                </div>
                <button
                  onClick={() => toggleBeat(index)}
                  className={`
                    w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 transition-all duration-200
                    ${getBeatButtonClass(beatState)}
                    ${currentBeat === index ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
                  `}
                  aria-label={`Beat ${getBeatLabel(index)}: State ${beatState}`}
                >
                  {beatState === 1 && <span className="text-white text-lg sm:text-xl">♪</span>}
                  {beatState === 2 && <span className="text-white text-lg sm:text-xl font-bold">♫</span>}
                </button>
              </div>
            ))}
          </div>
          
          {/* Second row - beats 3-4 */}
          <div className="grid grid-cols-8 gap-2">
            {userPattern.slice(8, 16).map((beatState, index) => {
              const actualIndex = index + 8;
              return (
                <div key={actualIndex} className="flex flex-col items-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {getBeatLabel(actualIndex)}
                  </div>
                  <button
                    onClick={() => toggleBeat(actualIndex)}
                    className={`
                      w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 transition-all duration-200
                      ${getBeatButtonClass(beatState)}
                      ${currentBeat === actualIndex ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
                    `}
                    aria-label={`Beat ${getBeatLabel(actualIndex)}: State ${beatState}`}
                  >
                    {beatState === 1 && <span className="text-white text-lg sm:text-xl">♪</span>}
                    {beatState === 2 && <span className="text-white text-lg sm:text-xl font-bold">♫</span>}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        <button
          onClick={playPattern}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isPlaying 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isPlaying ? '⏹ Stop' : '▶ Play'}
        </button>
        
        <button
          onClick={checkPattern}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
        >
          ✓ Check
        </button>
        
        <button
          onClick={resetPattern}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          ↺ Reset
        </button>
        
        <button
          onClick={showSolution}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
        >
          💡 Show Solution
        </button>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`mt-4 p-4 rounded-lg ${
          isCorrect 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
            <div>
              <p className="font-semibold">
                {isCorrect ? 'Perfect!' : 'Not quite right'}
              </p>
              {data.explanation && (
                <p className="text-sm mt-1">{data.explanation}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        <p>💡 <strong>Tips:</strong></p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>Click a box once for a regular sixteenth note (♪).</li>
          <li>Click it again for an accented sixteenth note (♫).</li>
          <li>A third click will clear the beat.</li>
          <li>Numbers (1-4) are the main beats, "e", "&", "a" are the subdivisions.</li>
          <li>The mambo pattern features rapid "a caballo" sequences.</li>
        </ul>
      </div>
    </div>
  );
}; 