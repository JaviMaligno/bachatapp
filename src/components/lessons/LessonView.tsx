import React from 'react';
import { Play } from 'lucide-react';
import { Section, Lesson } from '../../types/Lesson';
import { BackButton } from '../common/BackButton';
import { QuizSection } from './QuizSection';
import { musicRhythmLesson } from '../../data/lessons/music/music-rhythm';
import { musicInstrumentsLesson } from '../../data/lessons/music/music-instruments';
import { musicStructureLesson } from '../../data/lessons/music/music-structure';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface LessonViewProps {
  section: Section;
  lesson: Lesson;
  onBack: () => void;
}

const AUDIO_DISPLAY_NAMES: Record<string, string> = {
  'bongos_guira': 'Bongos & Güira',
  // Add other mappings as needed
};

export const LessonView: React.FC<LessonViewProps> = ({ section, lesson, onBack }) => {
  const handleQuizAnswer = (isCorrect: boolean) => {
    console.log('Answer is:', isCorrect ? 'correct' : 'incorrect');
  };

  const getLessonContent = () => {
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
    <div key={section.id} className="mt-8">
      <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{section.content}</ReactMarkdown>

      {/* Render nested sections if they exist */}
      {section.sections && (
        <div className="ml-4 mt-4 space-y-4">
          {section.sections.map((subSection) => (
            <div key={subSection.id}>
              <h3 className="text-lg font-semibold mb-2">{subSection.title}</h3>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{subSection.content}</ReactMarkdown>

              {/* Recursively render deeper nested sections */}
              {subSection.sections && (
                <div className="ml-4 mt-2 space-y-2">
                  {subSection.sections.map((nestedSection) => (
                    <div key={nestedSection.id}>
                      <h4 className="text-md font-medium mb-1">{nestedSection.title}</h4>
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{nestedSection.content}</ReactMarkdown>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Render media content if it exists */}
      {section.media && (
        <div className="mt-4">
          {section.media.image && (
            <figure className="mb-4">
              <img 
                src={section.media.image.src} 
                alt={section.media.image.caption || section.title} 
                className="rounded-lg" 
              />
              {section.media.image.caption && (
                <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
                  {section.media.image.caption}
                </figcaption>
              )}
            </figure>
          )}
          
          {section.media.audio && (
            <div className="grid grid-cols-2 gap-4 mt-2">
              {Object.entries(section.media.audio).map(([key, src]) => {
                console.log(`Audio ${key}:`, src);
                return (
                  <div key={key} className="flex flex-col">
                    <p className="font-medium capitalize mb-1">
                      {AUDIO_DISPLAY_NAMES[key] || key.replace(/_/g, ' ')}:
                    </p>
                    <audio 
                      controls 
                      src={src} 
                      className="w-full" 
                      onError={(e) => console.error(`Error loading audio ${key}:`, e)}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {section.media.video && (
            <div className="mt-4">
              <video controls src={section.media.video} className="w-full rounded-lg" />
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6">
      <BackButton onClick={onBack} label={`Back to ${section.title}`} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{lesson.title}</h1>
        
        <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
          <Play className="w-12 h-12 text-gray-400" />
        </div>

        {lessonContent && (
          <div className="prose max-w-none">
            {lessonContent.introduction && (
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{lessonContent.introduction}</ReactMarkdown>
            )}
            
            {lessonContent.sections.map(renderSection)}

            {lessonContent.note && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Note</h2>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{lessonContent.note}</ReactMarkdown>
              </div>
            )}

            {lessonContent.summary && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{lessonContent.summary}</ReactMarkdown>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
