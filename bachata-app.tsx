import React, { useState } from 'react';
import { 
  BookOpen, 
  Music2, 
  Users, 
  ChevronRight, 
  Play,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

const BachataApp = () => {
  const [currentSection, setCurrentSection] = useState('main');
  const [selectedLesson, setSelectedLesson] = useState(null);

  const sections = [
    {
      id: 'history',
      title: 'History',
      icon: BookOpen,
      color: 'bg-amber-100',
      lessons: [
        { id: 'origins', title: 'Origins of Bachata', progress: 80 },
        { id: 'evolution', title: 'Evolution Through Decades', progress: 30 },
        { id: 'modern', title: 'Modern Bachata', progress: 0 }
      ]
    },
    {
      id: 'music',
      title: 'Music',
      icon: Music2,
      color: 'bg-rose-100',
      lessons: [
        { id: 'rhythm', title: 'Basic Rhythm & Structure', progress: 100 },
        { id: 'instruments', title: 'Key Instruments', progress: 60 },
        { id: 'artists', title: 'Influential Artists', progress: 0 }
      ]
    },
    {
      id: 'dance',
      title: 'Dance',
      icon: Users,
      color: 'bg-blue-100',
      lessons: [
        { id: 'basic-steps', title: 'Basic Steps', progress: 90 },
        { id: 'turns', title: 'Basic Turns', progress: 40 },
        { id: 'combinations', title: 'Step Combinations', progress: 0 }
      ]
    }
  ];

  const renderMainMenu = () => (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Learn Bachata</h1>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setCurrentSection(section.id)}
          className={`w-full p-6 rounded-xl ${section.color} hover:opacity-90 transition-all group`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <section.icon className="w-8 h-8 text-gray-700" />
              <div className="text-left">
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                <p className="text-sm text-gray-600">{section.lessons.length} lessons</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      ))}
    </div>
  );

  const renderLessonsList = () => {
    const section = sections.find(s => s.id === currentSection);
    return (
      <div className="p-6">
        <button 
          onClick={() => setCurrentSection('main')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Menu</span>
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h1>
        <div className="space-y-4">
          {section.lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              className="w-full p-4 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {lesson.progress === 100 ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <Play className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">{lesson.title}</h3>
                    <div className="mt-1 w-48 h-1 bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderLesson = () => {
    const section = sections.find(s => s.id === currentSection);
    return (
      <div className="p-6">
        <button 
          onClick={() => setSelectedLesson(null)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to {section.title}</span>
        </button>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{selectedLesson.title}</h1>
          
          {/* Video Player Placeholder */}
          <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
            <Play className="w-12 h-12 text-gray-400" />
          </div>

          {/* Lesson Content */}
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Lesson Overview</h2>
            <p className="text-gray-600 mb-6">
              This is where the lesson content would go. It can include text, 
              images, and interactive elements to help students learn.
            </p>

            {/* Interactive Quiz Example */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Quick Check</h3>
              <div className="space-y-3">
                {['A', 'B', 'C', 'D'].map((option) => (
                  <button
                    key={option}
                    className="w-full p-4 text-left rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-all"
                  >
                    <span className="font-medium">Option {option}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white min-h-screen shadow-sm">
        {currentSection === 'main' && renderMainMenu()}
        {currentSection !== 'main' && !selectedLesson && renderLessonsList()}
        {selectedLesson && renderLesson()}
      </div>
    </div>
  );
};

export default BachataApp;