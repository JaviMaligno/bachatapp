import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Section, MusicLesson, Lesson, LessonSummary } from '../../types/Lesson';
import { BackButton } from '../common/BackButton';
import { musicRhythmLesson } from '../../data/lessons/music/music-rhythm';
import { musicInstrumentsLesson } from '../../data/lessons/music/music-instruments';
import { musicStructureLesson } from '../../data/lessons/music/music-structure';
import { history5060Lesson } from '../../data/lessons/history/history-50-60';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { progressManager } from '../common/ProgressBar';
import { InlineQuiz } from './InlineQuiz';
import { BuildAClave } from '../interactive/BuildAClave';
import { BuildMamboPattern } from '../interactive/BuildMamboPattern';
import { LabelTheBand } from '../interactive/LabelTheBand';

interface LessonViewProps {
    section: Section;
    lesson: Lesson | LessonSummary | null;
    onBack: () => void;
  }
  
  const AUDIO_DISPLAY_NAMES: Record<string, string> = {
    'bongos_guira': 'Bongos & Güira',
    // Add other mappings as needed
  };
  
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  
  export const MusicLessonView: React.FC<LessonViewProps> = ({ section, lesson, onBack }) => {
    const [isCompleted, setIsCompleted] = useState(() => {
      if (lesson && section) {
        return progressManager.getProgress(section.id, lesson.id) === 100;
      }
      return false;
    });
  
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
      if (section.id === 'history' && lesson.id === 'history-50-60') {
        return history5060Lesson;
      }
      return null;
    };
  
    const lessonContent = getLessonContent();
  
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, []);
  
    const renderSection = (section: Section) => {
      console.log('Section artists:', section.artists);
      
      const handleQuizComplete = (isCorrect: boolean) => {
        // Handle quiz completion - could be used for progress tracking
        console.log('Quiz completed:', isCorrect);
      };
      
      return (
        <div key={section.id} id={section.id} className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{section.title}</h2>
          <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{section.content}</ReactMarkdown>
            
            {/* Render interactive blocks */}
            {section.interactiveBlocks && section.interactiveBlocks.map((interactiveBlock, index) => {
              if (interactiveBlock.kind === 'quiz') {
                return (
                  <InlineQuiz
                    key={`${interactiveBlock.id}-${index}`}
                    quizData={interactiveBlock.data}
                    onComplete={handleQuizComplete}
                  />
                );
              }
              if (interactiveBlock.kind === 'build-a-clave') {
                return (
                  <BuildAClave
                    key={`${interactiveBlock.id}-${index}`}
                    data={interactiveBlock.data}
                  />
                );
              }
              if (interactiveBlock.kind === 'build-mambo') {
                return (
                  <BuildMamboPattern
                    key={`${interactiveBlock.id}-${index}`}
                    data={interactiveBlock.data}
                  />
                );
              }
              if (interactiveBlock.kind === 'label-the-band') {
                return (
                  <LabelTheBand
                    key={`${interactiveBlock.id}-${index}`}
                    data={interactiveBlock.data}
                  />
                );
              }
              // Other interactive block types can be added here in the future
              return null;
            })}
            
            {/* Add media if present */}
            {section.media && (
              <div className="-mt-4 mb-2">
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
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Audio Samples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.media.audio.samples.map((sample, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <p className="font-medium mb-2 text-gray-800 dark:text-white">
                            {AUDIO_DISPLAY_NAMES[sample.name] || sample.name}
                          </p>
                          <audio 
                            controls 
                            src={sample.path} 
                            className="w-full" 
                            onError={(e) => console.error(`Error loading audio ${sample.name}:`, e)}
                          />
                          {(sample.song || sample.artist) && (
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 italic">
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
  
            {/* Add second content block if present */}
            {section.content2 && (
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{section.content2}</ReactMarkdown>
            )}          
  
            {/* Add second media block */}
            {section.media2 && (
              <div className="-mt-4 mb-2">
                {section.media2.image && (
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={section.media2.image.src} 
                      alt={section.media2.image.caption || section.title} 
                      className="w-full h-auto object-contain max-h-[600px]" 
                    />
                    {section.media2.image.caption && (
                      <div className="p-4 bg-gray-50 text-sm text-gray-600 italic text-center">
                        {section.media2.image.caption}
                      </div>
                    )}
                  </div>
                )}
                
                {section.media2.audio?.samples && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Audio Samples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.media2.audio.samples.map((sample, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <p className="font-medium mb-2 text-gray-800 dark:text-white">
                            {AUDIO_DISPLAY_NAMES[sample.name] || sample.name}
                          </p>
                          <audio 
                            controls 
                            src={sample.path} 
                            className="w-full" 
                            onError={(e) => console.error(`Error loading audio ${sample.name}:`, e)}
                          />
                          {(sample.song || sample.artist) && (
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 italic">
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
  
                {section.media2.video && (
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <video controls src={section.media2.video} className="w-full" />
                  </div>
                )}
              </div>
            )}
  
            {/* Add second content block if present */}
            {section.content3 && (
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{section.content3}</ReactMarkdown>
            )}          
  
            {/* Add second media block */}
            {section.media3 && (
              <div className="-mt-4 mb-2">
                {section.media3.image && (
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={section.media3.image.src} 
                      alt={section.media3.image.caption || section.title} 
                      className="w-full h-auto object-contain max-h-[600px]" 
                    />
                    {section.media3.image.caption && (
                      <div className="p-4 bg-gray-50 text-sm text-gray-600 italic text-center">
                        {section.media3.image.caption}
                      </div>
                    )}
                  </div>
                )}
                
                {section.media3.audio?.samples && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Audio Samples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.media3.audio.samples.map((sample, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <p className="font-medium mb-2 text-gray-800 dark:text-white">
                            {AUDIO_DISPLAY_NAMES[sample.name] || sample.name}
                          </p>
                          <audio 
                            controls 
                            src={sample.path} 
                            className="w-full" 
                            onError={(e) => console.error(`Error loading audio ${sample.name}:`, e)}
                          />
                          {(sample.song || sample.artist) && (
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 italic">
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
  
                {section.media3.video && (
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <video controls src={section.media3.video} className="w-full" />
                  </div>
                )}
              </div>
            )}
  
            {/* Add Spotify Embeds if artists are present */}
            {section.artists && section.artists.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.artists.map((artist, index) => (
                  artist.spotifyLink && (
                    <div key={index} className="space-y-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {artist.name}:
                      </span>
                      <iframe 
                        style={{ borderRadius: '12px' }}
                        src={artist.spotifyLink}
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                      ></iframe>
                    </div>
                  )
                ))}
              </div>
            )}
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
                        
                        {/* Add Spotify Embeds if artists are present in subsection */}
                        {subSection.artists && subSection.artists.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {subSection.artists.map((artist, index) => (
                              artist.spotifyLink && (
                                <div key={index} className="space-y-2">
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {artist.name}:
                                  </span>
                                  <iframe 
                                    style={{ borderRadius: '12px' }}
                                    src={artist.spotifyLink}
                                    width="100%" 
                                    height="152" 
                                    frameBorder="0" 
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                    loading="lazy"
                                  ></iframe>
                                </div>
                              )
                            ))}
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
        </div>
      );
    };
  
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
          
          {(lesson.video || lessonContent?.video) ? (
            <div className="aspect-video mb-8">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${getYouTubeId(lesson.video || lessonContent?.video || '')}`}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (lesson.image || lessonContent?.image) ? (
            <div className="mb-8">
              <img
                src={lesson.image || lessonContent?.image}
                alt={lesson.title}
                className="w-full h-auto rounded-lg object-cover max-h-[400px]"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-8 flex items-center justify-center">
              <Play className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
          )}
  
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
  
              {lessonContent.references && lessonContent.references.length > 0 && (
                <div className="mt-8 bg-gray-50 dark:bg-gray-900/20 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
                    <span className="mr-2">📚</span> References
                  </h2>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {lessonContent.references.map((reference: string, index: number) => (
                      <li key={index} className="break-words">
                        <a 
                          href={reference} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 underline overflow-wrap-anywhere"
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
          )}
        </div>
      </div>
    );
  };
  