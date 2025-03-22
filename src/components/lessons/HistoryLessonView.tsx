import React, { useState} from 'react';
import { Section, HistoryLesson, ContentBlock, LessonSummary } from '../../types/Lesson';
import { BackButton } from '../common/BackButton';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { progressManager } from '../common/ProgressBar';
import { history5060Lesson } from '../../data/lessons/history/history-50-60';
import { history7080Lesson } from '../../data/lessons/history/history-70-80';

interface HistoryLessonViewProps {
  section: Section;
  lesson: HistoryLesson | LessonSummary;
  onBack: () => void;
}

const renderContentBlock = (block: ContentBlock) => {
  return (
    <div className="mt-4">
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{block.content}</ReactMarkdown>
      </div>
      
      {block.media?.images && (
        <div className="mt-4">
          <div className={`${block.media.images.length === 1 ? 'flex justify-center' : 'grid grid-cols-2 gap-4'}`}>
            {block.media.images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image.src}
                  alt={image.caption || ''}
                  className="w-full h-auto rounded-lg object-cover max-h-[400px]"
                />
                <p className="mt-2 text-gray-600 dark:text-gray-400 italic">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {block.media?.audio?.samples && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm mt-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Audio Samples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {block.media.audio.samples.map((sample, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p className="font-medium mb-2 text-gray-800 dark:text-white">
                  {sample.name}
                </p>
                {sample.spotifyLink ? (
                  <div className="w-full h-[80px]">
                    <iframe 
                      src={sample.spotifyLink} 
                      width="100%" 
                      height="80" 
                      allowFullScreen 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={sample.name}
                      className="rounded-md"
                    ></iframe>
                  </div>
                ) : sample.path ? (
                  <audio 
                    controls 
                    src={sample.path} 
                    className="w-full" 
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const HistoryLessonView: React.FC<HistoryLessonViewProps> = ({ section, lesson, onBack }) => {
  const [isCompleted, setIsCompleted] = useState(() => {
    return progressManager.getProgress(section.id, lesson.id) === 100;
  });

  // Get full lesson data if we have a summary
  let fullLesson: HistoryLesson | null = null;
  if (lesson.id === 'history-50-60') {
    fullLesson = history5060Lesson;
  } else if (lesson.id === 'history-70-80') {
    fullLesson = history7080Lesson;
  }

  if (!fullLesson) return null;

  const handleMarkComplete = () => {
    setIsCompleted(true);
    progressManager.setProgress(section.id, lesson.id, 100);
    window.dispatchEvent(new Event('lessonProgressUpdated'));
  };

  return (
    <div className="p-6">
      <BackButton onClick={onBack} label={`Back to ${section.title}`} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{fullLesson.title}</h1>
        
        {fullLesson.image && (
          <div className="mb-8">
            <img
              src={fullLesson.image}
              alt={fullLesson.title}
              className="w-full h-auto rounded-lg object-cover max-h-[400px]"
            />
          </div>
        )}

        {fullLesson.introduction && (
          <div className="prose dark:prose-invert max-w-none mb-8">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{fullLesson.introduction}</ReactMarkdown>
          </div>
        )}

        {fullLesson.sections.map((section) => (
          <div key={section.id} id={section.id} className="mt-8 space-y-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{section.title}</h2>
            
            {section.contentBlocks?.map((block, index) => (
              <div key={`${section.id}-block-${index}`} className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                {renderContentBlock(block)}
              </div>
            ))}

            {/* Add Spotify embeds if section has artists */}
            {section.artists && section.artists.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mt-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Featured Artists</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.artists.map((artist, index) => (
                    <div key={`${section.id}-artist-${index}`} className="space-y-2">
                      <p className="font-medium text-gray-800 dark:text-white">{artist.name}</p>
                      <div className="w-full h-[80px]">
                        <iframe 
                          src={artist.spotifyLink} 
                          width="100%" 
                          height="80" 
                          frameBorder="0" 
                          allowFullScreen 
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title={`${artist.name} on Spotify`}
                          className="rounded-md"
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Render subsections */}
            {section.sections && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100 flex items-center">
                  <span className="mr-2">🔑</span> Key Points to Remember
                </h3>
                <div className="space-y-4">
                  {section.sections.map((subSection) => (
                    <div key={`${section.id}-subsection-${subSection.id}`} className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {fullLesson.summary && (
          <div className="mt-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-emerald-900 dark:text-emerald-100">
              <span className="mr-2">📌</span> Summary
            </h2>
            <div className="text-emerald-900 dark:text-emerald-100">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{fullLesson.summary}</ReactMarkdown>
            </div>
          </div>
        )}

        {fullLesson.references && (
          <div className="mt-8 bg-gray-50 dark:bg-gray-900/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              <span className="mr-2">📚</span> References
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {fullLesson.references.map((reference, index) => (
                <li key={index}>
                  <a 
                    href={reference} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 underline"
                  >
                    {reference}
                  </a>
                </li>
              ))}
            </ul>
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
    </div>
  );
}; 