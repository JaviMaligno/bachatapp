import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { MainMenu } from './components/main/MainMenu';
import { LessonView } from './components/lessons/LessonView';
import { sections } from './data/sections';
import { SectionContent } from './components/sections/SectionContent';
import { QuizContent } from './components/quizzes/QuizContent';

const LessonsListWrapper = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  
  return (
    <SectionContent 
      section={section}
      onBack={() => navigate('/')}
      onSelectLesson={(lesson) => navigate(`/section/${sectionId}/lesson/${lesson.id}`)}
      onSelectQuiz={(quiz) => navigate(`/section/${sectionId}/quiz/${quiz.id}`)}
    />
  );
};

const LessonViewWrapper = () => {
  const { sectionId, lessonId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  const lesson = section.lessons?.find(l => l.id === lessonId) || section.lessons?.[0] || null;
  
  return (
    <LessonView 
      section={section}
      lesson={lesson}
      onBack={() => navigate(`/section/${sectionId}`)}
    />
  );
};

const MainMenuWrapper = () => {
  const navigate = useNavigate();
  return <MainMenu sections={sections} onSectionSelect={(id) => navigate(`/section/${id}`)} />;
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
    <QuizContent 
      quiz={quiz}
      onComplete={(score) => {
        navigate(`/section/${sectionId}`);
      }}
      onBack={() => navigate(`/section/${sectionId}`)}
      sectionTitle={section.title}
    />
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainMenuWrapper />} />
          <Route path="/section/:sectionId" element={<LessonsListWrapper />} />
          <Route path="/section/:sectionId/lesson/:lessonId" element={<LessonViewWrapper />} />
          <Route path="/section/:sectionId/quiz/:quizId" element={<QuizViewWrapper />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App; 