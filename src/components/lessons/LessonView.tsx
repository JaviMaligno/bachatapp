import React from 'react';
import { Play } from 'lucide-react';
import { Section, Lesson } from '../../types/Lesson';
import { BackButton } from '../common/BackButton';
import { QuizSection } from './QuizSection';
import { musicRhythmLesson } from '../../data/lessons/music/music-rhythm';
import { musicInstrumentsLesson } from '../../data/lessons/music/music-instruments';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface LessonViewProps {
  section: Section;
  lesson: Lesson;
  onBack: () => void;
}

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
    return null;
  };

  const lessonContent = getLessonContent();

  const renderSection = (section: Section) => (
    <div key={section.id} className="mt-8">
      <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{section.content}</ReactMarkdown>

      {/* Render nested sections if they exist */}
      {section.sections && (
        <div className="ml-4 mt-4">
          {section.sections.map((subSection) => (
            <div key={subSection.id} className="mt-4">
              <h3 className="text-lg font-semibold mb-2">{subSection.title}</h3>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{subSection.content}</ReactMarkdown>
            </div>
          ))}
        </div>
      )}

      {/* Render media content if it exists */}
      {section.media && (
        <div className="mt-4">
          {section.media.image && (
            <img src={section.media.image} alt={section.title} className="rounded-lg mb-4" />
          )}
          
          {section.media.audio && (
            <div className="grid grid-cols-2 gap-4 mt-2">
              {Object.entries(section.media.audio).map(([key, src]) => (
                <div key={key} className="flex flex-col">
                  <p className="font-medium capitalize mb-1">{key}:</p>
                  <audio controls src={src} className="w-full" />
                </div>
              ))}
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
