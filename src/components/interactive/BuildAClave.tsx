import React, { useState, useRef, useEffect } from 'react';
import { BuildAClaveData, BeatState } from '../../types/Lesson';
import confetti from 'canvas-confetti';

interface BuildAClaveProps {
  data: BuildAClaveData;
  onComplete?: () => void;
}

export const BuildAClave: React.FC<BuildAClaveProps> = ({ data, onComplete }) => {
  const [userPattern, setUserPattern] = useState<BeatState[]>(new Array(data.pattern.length).fill(0));
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
    const beatDuration = 60000 / (data.bpm * 2); // 8th notes

    const playBeat = () => {
      setCurrentBeat(beatIndex);
      playClick(userPattern[beatIndex]);
      
      beatIndex = (beatIndex + 1) % userPattern.length;
      
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
    setUserPattern(new Array(data.pattern.length).fill(0));
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
    const beatNumber = Math.floor(index / 2) + 1;
    const isOnBeat = index % 2 === 0;
    return isOnBeat ? beatNumber.toString() : '&';
  };

  const getGridLayout = () => {
    if (userPattern.length <= 8) {
      return {
        containerClass: 'grid grid-cols-8 gap-2 max-w-2xl mx-auto',
        buttonSize: 'w-12 h-12 sm:w-16 sm:h-16',
        textSize: 'text-2xl'
      };
    } else {
      return {
        containerClass: 'space-y-4 max-w-4xl mx-auto',
        buttonSize: 'w-10 h-10 sm:w-12 sm:h-12',
        textSize: 'text-lg sm:text-xl'
      };
    }
  };

  const renderBeats = () => {
    const layout = getGridLayout();
    
    if (userPattern.length <= 8) {
      // Single row for 8 or fewer beats
      return (
        <div className={layout.containerClass}>
          {userPattern.map((beatState, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {getBeatLabel(index)}
              </div>
              <button
                onClick={() => toggleBeat(index)}
                className={`
                  ${layout.buttonSize} rounded-lg border-2 transition-all duration-200
                  ${getBeatButtonClass(beatState)}
                  ${currentBeat === index ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
                `}
                aria-label={`Beat ${getBeatLabel(index)}: State ${beatState}`}
              >
                {beatState === 1 && <span className={`text-white ${layout.textSize}`}>♪</span>}
                {beatState === 2 && <span className={`text-white ${layout.textSize} font-bold`}>♫</span>}
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      // Two rows for more than 8 beats
      const firstRow = userPattern.slice(0, 8);
      const secondRow = userPattern.slice(8);
      
      return (
        <div className={layout.containerClass}>
          {/* First row */}
          <div className="grid grid-cols-8 gap-2">
            {firstRow.map((beatState, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {getBeatLabel(index)}
                </div>
                <button
                  onClick={() => toggleBeat(index)}
                  className={`
                    ${layout.buttonSize} rounded-lg border-2 transition-all duration-200
                    ${getBeatButtonClass(beatState)}
                    ${currentBeat === index ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
                  `}
                  aria-label={`Beat ${getBeatLabel(index)}: State ${beatState}`}
                >
                  {beatState === 1 && <span className={`text-white ${layout.textSize}`}>♪</span>}
                  {beatState === 2 && <span className={`text-white ${layout.textSize} font-bold`}>♫</span>}
                </button>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="grid grid-cols-8 gap-2">
            {secondRow.map((beatState, index) => {
              const actualIndex = index + 8;
              return (
                <div key={actualIndex} className="flex flex-col items-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {getBeatLabel(actualIndex)}
                  </div>
                  <button
                    onClick={() => toggleBeat(actualIndex)}
                    className={`
                      ${layout.buttonSize} rounded-lg border-2 transition-all duration-200
                      ${getBeatButtonClass(beatState)}
                      ${currentBeat === actualIndex ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
                    `}
                    aria-label={`Beat ${getBeatLabel(actualIndex)}: State ${beatState}`}
                  >
                    {beatState === 1 && <span className={`text-white ${layout.textSize}`}>♪</span>}
                    {beatState === 2 && <span className={`text-white ${layout.textSize} font-bold`}>♫</span>}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
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
      
      {/* Beat Grid */}
      <div className="mb-6">
        {renderBeats()}
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
          <li>Click a box once for a regular eighth note (♪).</li>
          <li>Click it again for an accented eighth note (♫).</li>
          <li>A third click will clear the beat.</li>
          <li>Numbers (1-8) are the main beats, "&" symbols are the off-beats.</li>
          <li>The derecho pattern has steady eighth notes with accents on beats 4 and 8.</li>
        </ul>
      </div>
    </div>
  );
}; 