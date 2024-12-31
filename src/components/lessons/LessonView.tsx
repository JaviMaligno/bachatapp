import React from 'react';
import { Play } from 'lucide-react';
import { Section, Lesson } from '../../types';
import { BackButton } from '../common/BackButton';
import { QuizSection } from './QuizSection';
import { musicRhythmLesson } from '../../data/lessons/music-rhythm';
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
    return null;
  };

  const lessonContent = getLessonContent();

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
            <ReactMarkdown>{lessonContent.content.introduction}</ReactMarkdown>
            
            {lessonContent.content.sections.map((section, index) => (
              <div key={index} className="mt-8">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <ReactMarkdown>{section.content}</ReactMarkdown>
                
                <div className="mt-4">
                  <h3 className="font-semibold">Instruments:</h3>
                  {section.details.instruments.map((instrument, i) => (
                    <div key={i} className="ml-4 mt-2">
                      <p className="font-medium">{instrument.name}:</p>
                      <p className="text-gray-600">{instrument.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold">Audio Samples:</h3>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    {Object.entries(section.details.audioSamples).map(([key, src]) => (
                      <div key={key}>
                        <p className="font-medium capitalize">{key}:</p>
                        <audio controls src={src} className="w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Note</h2>
              <ReactMarkdown>{lessonContent.content.note}</ReactMarkdown>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {lessonContent.content.summary}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
