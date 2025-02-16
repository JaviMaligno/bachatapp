import React from 'react';
import { Section, Lesson, LessonSummary } from '../../types/Lesson';
import { MusicLessonView } from './MusicLessonView';
import { HistoryLessonView } from './HistoryLessonView';

interface LessonViewProps {
  section: Section;
  lesson: Lesson | LessonSummary | null;
  onBack: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ section, lesson, onBack }) => {
  if (!lesson) return null;

  if (section.id === 'music') {
    return <MusicLessonView section={section} lesson={lesson} onBack={onBack} />;
  }

  if (section.id === 'history') {
    return <HistoryLessonView section={section} lesson={lesson} onBack={onBack} />;
  }

  return null;
};
