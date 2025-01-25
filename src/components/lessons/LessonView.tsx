import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Section, Lesson, LessonSummary } from '../../types/Lesson';
import { BackButton } from '../common/BackButton';
import { musicRhythmLesson } from '../../data/lessons/music/music-rhythm';
import { musicInstrumentsLesson } from '../../data/lessons/music/music-instruments';
import { musicStructureLesson } from '../../data/lessons/music/music-structure';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { progressManager } from '../common/ProgressBar';

interface LessonViewProps {
  section: Section;
  lesson: Lesson | LessonSummary | null;
  onBack: () => void;
}

const AUDIO_DISPLAY_NAMES: Record<string, string> = {
  'bongos_guira': 'Bongos & Güira',
  // Add other mappings as needed
};

export const LessonView: React.FC<LessonViewProps> = ({ section, lesson, onBack }) => {
  const [isCompleted, setIsCompleted] = useState(() => {
    if (lesson && section) {
      return progressManager.getProgress(section.id, lesson.id) === 100;
    }
    return false;
  });

  const handleQuizAnswer = (isCorrect: boolean) => {
    console.log('Answer is:', isCorrect ? 'correct' : 'incorrect');
  };

  const getLessonContent = () => {
    if (!lesson) return null;
    if (section.id === 'music' && lesson.id === 'rhythm') {
      return musicRhythmLesson;
    }
    if (section.id === 'music' && lesson.id === 'instruments') {
      return musicInstrumentsLesson;
    }
    if (section.id === 'music' && lesson.id === 'structure') {
      return musicStructureLesson;
    }
    return null;
  };

  const lessonContent = getLessonContent();

  const renderSection = (section: Section) => (
    <div key={section.id} className="mt-8 space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{section.title}</h2>
      <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{section.content}</ReactMarkdown>
      </div>

      {/* Key Points Section */}
      {section.sections && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100 flex items-center">
            <span className="mr-2">🔑</span> Key Points to Remember
          </h3>
          <div className="space-y-4">
            {section.sections.map((subSection) => (
              <div key={subSection.id} className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-6">
                    <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">{subSection.title}</h4>
                    {subSection.content && (
                      <div className="mt-1 text-gray-600 dark:text-gray-300">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{subSection.content}</ReactMarkdown>
                      </div>
                    )}
                    {/* Render nested sections */}
                    {subSection.sections && (
                      <div className="mt-2 ml-4 space-y-2">
                        {subSection.sections.map((nestedSection) => (
                          <div key={nestedSection.id} className="flex items-start">
                            <div className="flex-shrink-0 mt-2.5">
                              <div className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="ml-3">
                              <h5 className="font-medium text-gray-800 dark:text-white">{nestedSection.title}</h5>
                              <div className="mt-1 text-gray-600 dark:text-gray-300">
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{nestedSection.content}</ReactMarkdown>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Media Section with improved styling */}
      {section.media && (
        <div className="mt-6 space-y-6">
          {section.media.image && (
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={section.media.image.src} 
                alt={section.media.image.caption || section.title} 
                className="w-full h-auto object-contain max-h-[600px]" 
              />
              {section.media.image.caption && (
                <div className="p-4 bg-gray-50 text-sm text-gray-600 italic text-center">
                  {section.media.image.caption}
                </div>
              )}
            </div>
          )}
          
          {section.media.audio?.samples && (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Audio Samples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.media.audio.samples.map((sample, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium mb-2 text-gray-800">{AUDIO_DISPLAY_NAMES[sample.name] || sample.name}</p>
                    <audio 
                      controls 
                      src={sample.path} 
                      className="w-full" 
                      onError={(e) => console.error(`Error loading audio ${sample.name}:`, e)}
                    />
                    {(sample.song || sample.artist) && (
                      <p className="text-sm text-gray-600 mt-2 italic">
                        {sample.song && `"${sample.song}"`}
                        {sample.song && sample.artist && " by "}
                        {sample.artist}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {section.media.video && (
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <video controls src={section.media.video} className="w-full" />
            </div>
          )}
        </div>
      )}
    </div>
  );

  const handleMarkComplete = () => {
    if (lesson && section) {
      setIsCompleted(true);
      progressManager.setProgress(section.id, lesson.id, 100);
      window.dispatchEvent(new Event('lessonProgressUpdated'));
    }
  };

  if (!lesson) return null;

  return (
    <div className="p-6">
      <BackButton onClick={onBack} label={`Back to ${section.title}`} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{lesson.title}</h1>
        
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-8 flex items-center justify-center">
          <Play className="w-12 h-12 text-gray-400 dark:text-gray-500" />
        </div>

        {lessonContent && (
          <div className="prose dark:prose-invert max-w-none">
            {lessonContent.introduction && (
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{lessonContent.introduction}</ReactMarkdown>
            )}
            
            {lessonContent.sections.map(renderSection)}

            {lessonContent.note && (
              <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-700">
                <h2 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100 flex items-center">
                  <span className="mr-2">📝</span> Note
                </h2>
                <div className="text-amber-900 dark:text-amber-100">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{lessonContent.note}</ReactMarkdown>
                </div>
              </div>
            )}

            {lessonContent.summary && (
              <div className="mt-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-700">
                <h2 className="text-xl font-semibold mb-4 text-emerald-900 dark:text-emerald-100 flex items-center">
                  <span className="mr-2">📌</span> Summary
                </h2>
                <div className="text-emerald-900 dark:text-emerald-100">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{lessonContent.summary}</ReactMarkdown>
                </div>
              </div>
            )}

            <div className="mt-8 space-y-6">
              <div className="flex justify-center">
                <button
                  onClick={handleMarkComplete}
                  disabled={isCompleted}
                  className={`
                    transform transition-all duration-200 
                    ${isCompleted 
                      ? 'bg-gray-200 text-gray-600 cursor-default' 
                      : 'bg-green-600 hover:bg-green-700 active:scale-95 hover:scale-105'
                    }
                    text-white font-semibold py-2 px-6 rounded-lg shadow-sm
                  `}
                >
                  {isCompleted ? '✓ Completed' : 'Mark as Complete'}
                </button>
              </div>
              
              <div className="flex justify-center">
                <BackButton onClick={onBack} label={`Back to ${section.title}`} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
