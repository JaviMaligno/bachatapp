import React, { useState, useRef, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Play, Pause } from 'lucide-react';

// Shared interfaces
export interface InstrumentData {
  id: string;
  name: string;
  audioPath: string;
  color?: string;
}

export interface PositionData {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  description?: string;
}

// SVG Silhouette Components
export const renderRequintoSilhouette = () => (
  <svg viewBox="0 0 120 280" className="w-full h-full">
    {/* Requinto - smaller classical guitar, 4/5 size */}
    {/* Body - figure-8 shape */}
    <path
      d="M30 100 C15 100 5 115 5 130 C5 145 15 160 30 160 L30 190 C15 190 5 205 5 220 C5 235 15 250 30 250 L90 250 C105 250 115 235 115 220 C115 205 105 190 90 190 L90 160 C105 160 115 145 115 130 C115 115 105 100 90 100 Z"
      fill="currentColor"
    />
    {/* Sound hole */}
    <circle cx="60" cy="175" r="12" fill="white" opacity="0.2" />
    {/* Bridge */}
    <rect x="52" y="210" width="16" height="3" fill="white" opacity="0.3" />
    {/* Neck */}
    <rect x="55" y="30" width="10" height="70" fill="currentColor" />
    {/* Frets */}
    <line x1="55" y1="40" x2="65" y2="40" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="55" y1="50" x2="65" y2="50" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="55" y1="60" x2="65" y2="60" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="55" y1="70" x2="65" y2="70" stroke="white" strokeWidth="0.5" opacity="0.2" />
    {/* Headstock */}
    <rect x="50" y="10" width="20" height="25" fill="currentColor" />
    {/* Tuning pegs - 4 total (smaller guitar) */}
    <circle cx="48" cy="18" r="2" fill="white" opacity="0.4" />
    <circle cx="48" cy="27" r="2" fill="white" opacity="0.4" />
    <circle cx="72" cy="18" r="2" fill="white" opacity="0.4" />
    <circle cx="72" cy="27" r="2" fill="white" opacity="0.4" />
    {/* Strings */}
    <line x1="57" y1="35" x2="57" y2="250" stroke="white" strokeWidth="0.4" opacity="0.4" />
    <line x1="59" y1="35" x2="59" y2="250" stroke="white" strokeWidth="0.4" opacity="0.4" />
    <line x1="61" y1="35" x2="61" y2="250" stroke="white" strokeWidth="0.4" opacity="0.4" />
    <line x1="63" y1="35" x2="63" y2="250" stroke="white" strokeWidth="0.4" opacity="0.4" />
  </svg>
);

export const renderSegundaSilhouette = () => (
  <svg viewBox="0 0 140 320" className="w-full h-full">
    {/* Segunda - MUCH LARGER classical guitar */}
    {/* Body - bigger figure-8 shape */}
    <path
      d="M25 110 C8 110 0 130 0 150 C0 170 8 190 25 190 L25 230 C8 230 0 250 0 270 C0 290 8 310 25 310 L115 310 C132 310 140 290 140 270 C140 250 132 230 115 230 L115 190 C132 190 140 170 140 150 C140 130 132 110 115 110 Z"
      fill="currentColor"
    />
    {/* Sound hole */}
    <circle cx="70" cy="210" r="15" fill="white" opacity="0.2" />
    {/* Bridge */}
    <rect x="60" y="250" width="20" height="4" fill="white" opacity="0.3" />
    {/* Neck - longer */}
    <rect x="65" y="25" width="10" height="85" fill="currentColor" />
    {/* Frets */}
    <line x1="65" y1="35" x2="75" y2="35" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="65" y1="45" x2="75" y2="45" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="65" y1="55" x2="75" y2="55" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="65" y1="65" x2="75" y2="65" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="65" y1="75" x2="75" y2="75" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="65" y1="85" x2="75" y2="85" stroke="white" strokeWidth="0.5" opacity="0.2" />
    {/* Headstock - larger */}
    <rect x="58" y="5" width="24" height="25" fill="currentColor" />
    {/* Tuning pegs - 6 total (3 each side) */}
    <circle cx="55" cy="12" r="2.5" fill="white" opacity="0.4" />
    <circle cx="55" cy="18" r="2.5" fill="white" opacity="0.4" />
    <circle cx="55" cy="24" r="2.5" fill="white" opacity="0.4" />
    <circle cx="85" cy="12" r="2.5" fill="white" opacity="0.4" />
    <circle cx="85" cy="18" r="2.5" fill="white" opacity="0.4" />
    <circle cx="85" cy="24" r="2.5" fill="white" opacity="0.4" />
    {/* Strings */}
    <line x1="66" y1="30" x2="66" y2="310" stroke="white" strokeWidth="0.4" opacity="0.4" />
    <line x1="68" y1="30" x2="68" y2="310" stroke="white" strokeWidth="0.4" opacity="0.4" />
    <line x1="70" y1="30" x2="70" y2="310" stroke="white" strokeWidth="0.4" opacity="0.4" />
    <line x1="72" y1="30" x2="72" y2="310" stroke="white" strokeWidth="0.4" opacity="0.4" />
    <line x1="74" y1="30" x2="74" y2="310" stroke="white" strokeWidth="0.4" opacity="0.4" />
  </svg>
);

export const renderBassSilhouette = () => (
  <svg viewBox="0 0 140 380" className="w-full h-full">
    {/* Bass guitar - accurate, modern electric bass shape based on reference */}
    <path
      d="M78 130
         C 110 125, 135 145, 130 180
         C 125 215, 115 225, 110 240
         C 120 270, 138 290, 125 335
         C 112 380, 85 385, 70 385
         C 55 385, 28 380, 15 335
         C 2 290, 20 270, 30 240
         C 25 225, 15 215, 10 180
         C 5 145, 30 125, 62 130
         L 78 130 Z"
      fill="currentColor"
    />
    
    {/* Long bass neck */}
    <rect x="62" y="10" width="16" height="120" fill="currentColor" />
    
    {/* Bass headstock (modern 2+2) */}
    <path d="M 55 5 L 85 5 C 90 5, 95 10, 95 20 C 95 30, 90 35, 85 35 L 55 35 C 50 35, 45 30, 45 20 C 45 10, 50 5, 55 5 Z" fill="currentColor" />
    
    {/* Tuning pegs */}
    <circle cx="40" cy="15" r="3" fill="white" opacity="0.6" />
    <circle cx="40" cy="25" r="3" fill="white" opacity="0.6" />
    <circle cx="100" cy="15" r="3" fill="white" opacity="0.6" />
    <circle cx="100" cy="25" r="3" fill="white" opacity="0.6" />
    
    {/* Bass pickups (humbucker style) */}
    <rect x="55" y="240" width="30" height="15" rx="3" fill="white" opacity="0.4" />
    <rect x="55" y="280" width="30" height="15" rx="3" fill="white" opacity="0.4" />
    
    {/* Control knobs */}
    <circle cx="95" cy="320" r="4" fill="white" opacity="0.4" />
    <circle cx="105" cy="340" r="4" fill="white" opacity="0.4" />
    
    {/* Bass strings - thick */}
    <line x1="66" y1="35" x2="66" y2="375" stroke="white" strokeWidth="1.2" opacity="0.5" />
    <line x1="70" y1="35" x2="70" y2="375" stroke="white" strokeWidth="1.2" opacity="0.5" />
    <line x1="74" y1="35" x2="74" y2="375" stroke="white" strokeWidth="1.2" opacity="0.5" />
    <line x1="78" y1="35" x2="78" y2="375" stroke="white" strokeWidth="1.2" opacity="0.5" />
    
    {/* Bridge */}
    <rect x="60" y="375" width="20" height="8" rx="2" fill="white" opacity="0.4" />
  </svg>
);

export const renderGuiraSilhouette = () => (
  <svg viewBox="0 0 140 220" className="w-full h-full">
    {/* Güira - metal cylindrical tube with prominent scraper */}
    {/* Main cylindrical body - larger */}
    <rect x="25" y="50" width="70" height="140" rx="12" fill="currentColor" />
    {/* Handle - more prominent */}
    <rect x="45" y="25" width="30" height="30" rx="10" fill="currentColor" />
    {/* Connection between handle and body */}
    <rect x="52" y="45" width="16" height="10" fill="currentColor" />
    
    {/* Ridged texture pattern - more detailed */}
    <g opacity="0.3">
      {Array.from({ length: 28 }, (_, i) => (
        <line 
          key={i}
          x1="30" 
          y1={55 + i * 4.8} 
          x2="90" 
          y2={55 + i * 4.8} 
          stroke="white" 
          strokeWidth="1.2"
        />
      ))}
    </g>
    
    {/* Small dimples/notches pattern */}
    <g opacity="0.25">
      {Array.from({ length: 9 }, (_, row) => 
        Array.from({ length: 14 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={30 + col * 4.3}
            cy={60 + row * 14}
            r="1"
            fill="white"
          />
        ))
      )}
    </g>
    
    {/* EXTREMELY LONG Scraper/brush - extends much further */}
    <rect x="105" y="40" width="8" height="120" rx="4" fill="#8B4513" />
    
    {/* Very extended metal scraper part */}
    <rect x="103" y="45" width="12" height="110" rx="3" fill="#C0C0C0" opacity="0.9" />
    
    {/* Very long brush/scraper lines */}
    <g opacity="0.8">
      {Array.from({ length: 35 }, (_, i) => (
        <line 
          key={i}
          x1="115" 
          y1={50 + i * 3.1} 
          x2="108" 
          y2={52 + i * 3.1} 
          stroke="#C0C0C0" 
          strokeWidth="1.4"
        />
      ))}
    </g>
    
    {/* Additional long scraper texture lines */}
    <g opacity="0.6">
      {Array.from({ length: 30 }, (_, i) => (
        <line 
          key={i}
          x1="118" 
          y1={55 + i * 3.5} 
          x2="112" 
          y2={56 + i * 3.5} 
          stroke="#E0E0E0" 
          strokeWidth="1.0"
        />
      ))}
    </g>
    
    {/* Extended motion lines showing scraping action */}
    <g opacity="0.6">
      <path d="M120 80 Q126 85 120 90" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M122 100 Q128 105 122 110" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M121 120 Q127 125 121 130" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M123 140 Q129 145 123 150" stroke="white" strokeWidth="1.5" fill="none" />
    </g>
    
    {/* Hand grip area on handle */}
    <g opacity="0.4">
      <line x1="45" y1="30" x2="75" y2="30" stroke="white" strokeWidth="0.8" />
      <line x1="45" y1="35" x2="75" y2="35" stroke="white" strokeWidth="0.8" />
      <line x1="45" y1="40" x2="75" y2="40" stroke="white" strokeWidth="0.8" />
    </g>
    
    {/* Scraper tip detail */}
    <circle cx="111" cy="158" r="2" fill="#C0C0C0" opacity="0.7" />
  </svg>
);

export const renderBongosSilhouette = () => (
  <svg viewBox="0 0 180 120" className="w-full h-full">
    {/* Bongos - two connected drums, much larger and more detailed */}
    
    {/* Macho (smaller drum) - left */}
    <ellipse cx="50" cy="30" rx="25" ry="18" fill="currentColor" />
    <rect x="25" y="30" width="50" height="65" fill="currentColor" />
    <ellipse cx="50" cy="95" rx="25" ry="18" fill="currentColor" opacity="0.3" />
    
    {/* Hembra (larger drum) - right */}
    <ellipse cx="120" cy="35" rx="32" ry="22" fill="currentColor" />
    <rect x="88" y="35" width="64" height="70" fill="currentColor" />
    <ellipse cx="120" cy="105" rx="32" ry="22" fill="currentColor" opacity="0.3" />
    
    {/* Connection bridge - more substantial */}
    <rect x="75" y="55" width="13" height="25" rx="3" fill="currentColor" />
    
    {/* Drumhead details */}
    <ellipse cx="50" cy="30" rx="20" ry="14" fill="white" opacity="0.15" />
    <ellipse cx="120" cy="35" rx="26" ry="18" fill="white" opacity="0.15" />
    
    {/* Hardware details - tension rods */}
    <g opacity="0.4">
      {/* Macho hardware */}
      <circle cx="28" cy="40" r="2" fill="white" />
      <circle cx="72" cy="40" r="2" fill="white" />
      <circle cx="28" cy="55" r="2" fill="white" />
      <circle cx="72" cy="55" r="2" fill="white" />
      <circle cx="28" cy="70" r="2" fill="white" />
      <circle cx="72" cy="70" r="2" fill="white" />
      <circle cx="28" cy="85" r="2" fill="white" />
      <circle cx="72" cy="85" r="2" fill="white" />
      
      {/* Hembra hardware */}
      <circle cx="92" cy="45" r="2" fill="white" />
      <circle cx="148" cy="45" r="2" fill="white" />
      <circle cx="92" cy="60" r="2" fill="white" />
      <circle cx="148" cy="60" r="2" fill="white" />
      <circle cx="92" cy="75" r="2" fill="white" />
      <circle cx="148" cy="75" r="2" fill="white" />
      <circle cx="92" cy="90" r="2" fill="white" />
      <circle cx="148" cy="90" r="2" fill="white" />
    </g>
    
    {/* Rim details */}
    <ellipse cx="50" cy="30" rx="25" ry="18" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
    <ellipse cx="120" cy="35" rx="32" ry="22" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
  </svg>
);

export const getSilhouetteComponent = (instrumentName: string) => {
  switch (instrumentName.toLowerCase()) {
    case 'requinto':
      return renderRequintoSilhouette();
    case 'segunda':
      return renderSegundaSilhouette();
    case 'bass':
      return renderBassSilhouette();
    case 'güira':
      return renderGuiraSilhouette();
    case 'bongos':
      return renderBongosSilhouette();
    default:
      return renderRequintoSilhouette();
  }
};

// Draggable Audio Component
interface DraggableAudioProps {
  instrument: InstrumentData;
  isUsed: boolean;
}

export const DraggableAudio: React.FC<DraggableAudioProps> = ({ instrument, isUsed }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'audio',
    item: { id: instrument.id, name: instrument.name, type: 'audio' },
    canDrag: !isUsed,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const stopAudio = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isDragging) {
      stopAudio();
    }
  }, [isDragging]);

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={`
        relative bg-white dark:bg-gray-800 rounded-lg border-2 p-4 cursor-move transition-all duration-200 shadow-md
        ${isUsed 
          ? 'border-gray-300 opacity-50 cursor-not-allowed' 
          : 'border-blue-300 hover:border-blue-400 hover:shadow-lg'
        }
        ${isDragging ? 'opacity-50 transform scale-105' : ''}
      `}
      style={{ minWidth: '120px' }}
    >
      <audio
        ref={audioRef}
        src={instrument.audioPath}
        onEnded={handleAudioEnd}
        preload="metadata"
      />
      
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={togglePlay}
          disabled={isUsed}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200
            ${isUsed 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
            }
          `}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <div className="text-center">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Audio Sample
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Click to listen
          </div>
        </div>
      </div>
    </div>
  );
};

// Draggable Name Component
interface DraggableNameProps {
  instrument: InstrumentData;
  isUsed: boolean;
}

export const DraggableName: React.FC<DraggableNameProps> = ({ instrument, isUsed }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'name',
    item: { id: instrument.id, name: instrument.name, type: 'name' },
    canDrag: !isUsed,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={`
        bg-white dark:bg-gray-800 rounded-lg border-2 p-4 cursor-move transition-all duration-200 shadow-md text-center
        ${isUsed 
          ? 'border-gray-300 opacity-50 cursor-not-allowed' 
          : 'border-green-300 hover:border-green-400 hover:shadow-lg'
        }
        ${isDragging ? 'opacity-50 transform scale-105' : ''}
      `}
      style={{ minWidth: '120px' }}
    >
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {instrument.name}
      </div>
    </div>
  );
};

// Stage Layout Component
export const StageLayout: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 400 330" 
      className="w-full h-full"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      {/* Stage Platform */}
      <rect x="50" y="180" width="300" height="100" fill="#8B4513" rx="10" />
      <rect x="60" y="190" width="280" height="80" fill="#A0522D" rx="5" />
      
      {/* Stage Lighting */}
      <circle cx="100" cy="50" r="15" fill="#FFD700" opacity="0.7" />
      <circle cx="200" cy="40" r="15" fill="#FFD700" opacity="0.7" />
      <circle cx="300" cy="50" r="15" fill="#FFD700" opacity="0.7" />
      
      {/* Light Beams */}
      <polygon points="100,65 80,180 120,180" fill="#FFD700" opacity="0.3" />
      <polygon points="200,55 175,180 225,180" fill="#FFD700" opacity="0.3" />
      <polygon points="300,65 280,180 320,180" fill="#FFD700" opacity="0.3" />
      
      {/* Microphone Stand (for vocalist position) */}
      <line x1="200" y1="160" x2="200" y2="190" stroke="#333" strokeWidth="3" />
      <circle cx="200" cy="160" r="8" fill="#333" />
      
      {/* Stage Text - better positioned with more space */}
      <text x="200" y="325" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
        Bachata Band Stage
      </text>
    </svg>
  );
};

// Drop Zone Components
interface SilhouetteDropZoneProps {
  position: PositionData;
  droppedItem: string | null;
  onDrop: (itemId: string, positionId: string) => void;
  isCorrect: boolean | null;
  acceptType: 'audio' | 'name';
}

export const SilhouetteDropZone: React.FC<SilhouetteDropZoneProps> = ({ 
  position, 
  droppedItem, 
  onDrop, 
  isCorrect,
  acceptType 
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: acceptType,
    drop: (item: { id: string }) => onDrop(item.id, position.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const SilhouetteComponent = getSilhouetteComponent(position.label);

  const getDropZoneStyle = () => {
    if (droppedItem) {
      return isCorrect 
        ? 'bg-green-100 border-green-400 text-green-700' 
        : 'bg-red-100 border-red-400 text-red-700';
    }
    return isOver 
      ? 'bg-blue-100 border-blue-400 border-dashed' 
      : 'bg-gray-50 border-gray-300 border-dashed';
  };

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className={`
        absolute rounded-lg border-2 transition-all duration-200
        flex flex-col items-center justify-center text-center p-2
        ${getDropZoneStyle()}
      `}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${position.width}%`,
        height: `${position.height}%`,
      }}
    >
      {droppedItem ? (
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 text-white opacity-70">
            {SilhouetteComponent}
          </div>
          <span className="text-sm font-medium">
            {isCorrect !== null && (
              isCorrect ? (
                <span className="text-green-400 flex items-center gap-1">
                  <span>✓</span> Correct!
                </span>
              ) : (
                <span className="text-red-400 flex items-center gap-1">
                  <span>✗</span> Wrong
                </span>
              )
            )}
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 text-gray-400">
            {SilhouetteComponent}
          </div>
          <span className="text-sm text-gray-500 font-medium">
            Drop {acceptType} here
          </span>
        </div>
      )}
    </div>
  );
};

interface NameDropZoneProps {
  instrument: InstrumentData;
  droppedItem: string | null;
  onDrop: (itemId: string, instrumentId: string) => void;
  isCorrect: boolean | null;
}

export const NameDropZone: React.FC<NameDropZoneProps> = ({ 
  instrument, 
  droppedItem, 
  onDrop, 
  isCorrect 
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'audio',
    drop: (item: { id: string }) => onDrop(item.id, instrument.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const getDropZoneStyle = () => {
    if (droppedItem) {
      return isCorrect 
        ? 'bg-green-100 border-green-400 text-green-700' 
        : 'bg-red-100 border-red-400 text-red-700';
    }
    return isOver 
      ? 'bg-blue-100 border-blue-400 border-dashed' 
      : 'bg-gray-50 border-gray-300 border-dashed';
  };

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className={`
        rounded-lg border-2 transition-all duration-200 p-4 text-center min-h-[120px]
        flex flex-col items-center justify-center
        ${getDropZoneStyle()}
      `}
    >
      <div className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
        {instrument.name}
      </div>
      {droppedItem ? (
        <span className="text-sm font-medium">
          {isCorrect !== null && (
            isCorrect ? (
              <span className="text-green-600 flex items-center gap-1">
                <span>✓</span> Correct!
              </span>
            ) : (
              <span className="text-red-600 flex items-center gap-1">
                <span>✗</span> Wrong
              </span>
            )
          )}
        </span>
      ) : (
        <span className="text-sm text-gray-500">
          Drop audio here
        </span>
      )}
    </div>
  );
}; 