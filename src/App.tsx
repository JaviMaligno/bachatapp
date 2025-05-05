import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { MainMenu } from './components/main/MainMenu';
import { LessonView } from './components/lessons/LessonView';
import { sections } from './data/sections';
import { SectionContent } from './components/sections/SectionContent';
import { QuizContent } from './components/quizzes/QuizContent';
import { GlossaryView } from './components/glossary/GlossaryView';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { SEO } from './components/common/SEO';
import { StructuredData } from './components/common/StructuredData';

const LessonsListWrapper = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  
  return (
    <>
      <SEO 
        title={`${section.title} - Bachata App`}
        description={`Learn about ${section.title.toLowerCase()} in Bachata music, including lessons, quizzes, and a glossary of key terms.`}
      />
      <StructuredData type="section" data={section} />
      <SectionContent 
        section={section}
        onBack={() => navigate('/')}
        onSelectLesson={(lesson) => navigate(`/section/${sectionId}/lesson/${lesson.id}`)}
        onSelectQuiz={(quiz) => navigate(`/section/${sectionId}/quiz/${quiz.id}`)}
        onSelectGlossary={() => navigate(`/section/${sectionId}/glossary`)}
      />
    </>
  );
};

const LessonViewWrapper = () => {
  const { sectionId, lessonId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  const lesson = section.lessons?.find(l => l.id === lessonId) || section.lessons?.[0] || null;
  
  return (
    <>
      <SEO 
        title={`${lesson?.title || 'Lesson'} - ${section.title} | Bachata App`}
        description={`Learn about ${lesson?.title?.toLowerCase() || 'bachata'} in this ${section.title.toLowerCase()} lesson.`}
        article={true}
      />
      <StructuredData type="lesson" data={{ section, lesson }} />
      <LessonView 
        section={section}
        lesson={lesson}
        onBack={() => navigate(`/section/${sectionId}`)}
      />
    </>
  );
};

const MainMenuWrapper = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEO /> {/* Uses default values */}
      <StructuredData type="home" data={{}} />
      <MainMenu sections={sections} onSectionSelect={(id) => navigate(`/section/${id}`)} />
    </>
  );
};

const QuizViewWrapper = () => {
  const { sectionId, quizId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  const quiz = section.quizzes?.find(q => q.id === quizId);
  
  if (!quiz) {
    console.error('Quiz not found');
    return null;
  }

  return (
    <>
      <SEO 
        title={`${quiz.title} Quiz - ${section.title} | Bachata App`}
        description={`Test your knowledge with the ${quiz.title.toLowerCase()} quiz in the ${section.title.toLowerCase()} section.`}
      />
      <StructuredData type="quiz" data={{ section, quiz }} />
      <QuizContent 
        quiz={quiz}
        onComplete={() => {
          navigate(`/section/${sectionId}`);
        }}
        onBack={() => navigate(`/section/${sectionId}`)}
        sectionTitle={section.title}
      />
    </>
  );
};

const GlossaryViewWrapper = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  
  if (!section.glossary) {
    console.error('Glossary not found');
    return null;
  }

  return (
    <>
      <SEO 
        title={`${section.title} Glossary - Bachata App`}
        description={`Comprehensive glossary of ${section.title.toLowerCase()} terms in Bachata music and dance.`}
      />
      <StructuredData type="glossary" data={{ section, glossary: section.glossary }} />
      <GlossaryView 
        glossary={section.glossary}
        sectionTitle={section.title}
        onBack={() => navigate(`/section/${sectionId}`)}
      />
    </>
  );
};

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<MainMenuWrapper />} />
            <Route path="/section/:sectionId" element={<LessonsListWrapper />} />
            <Route path="/section/:sectionId/lesson/:lessonId" element={<LessonViewWrapper />} />
            <Route path="/section/:sectionId/quiz/:quizId" element={<QuizViewWrapper />} />
            <Route path="/section/:sectionId/glossary" element={<GlossaryViewWrapper />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </Router>
    </DarkModeProvider>
  );
};

export default App; 