import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { MainMenu } from './components/main/MainMenu';
import { LessonsList } from './components/lessons/LessonsList';
import { LessonView } from './components/lessons/LessonView';
import { sections } from './data/sections';

const LessonsListWrapper = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  
  return (
    <LessonsList 
      section={section}
      onBack={() => navigate('/')}
      onSelectLesson={(lesson) => navigate(`/section/${sectionId}/lesson/${lesson.id}`)}
    />
  );
};

const LessonViewWrapper = () => {
  const { sectionId, lessonId } = useParams();
  const navigate = useNavigate();
  const section = sections.find(s => s.id === sectionId) || sections[0];
  const lesson = section.lessons.find(l => l.id === lessonId) || section.lessons[0];
  
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

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainMenuWrapper />} />
          <Route path="/section/:sectionId" element={<LessonsListWrapper />} />
          <Route path="/section/:sectionId/lesson/:lessonId" element={<LessonViewWrapper />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App; 