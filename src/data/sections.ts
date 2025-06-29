import { BookOpen, Music2, Users } from 'lucide-react';
import { Section, LessonSummary, GlossarySection } from '../types/Lesson';
import { instrumentQuizQuestions } from './quizzes/instrument-quiz';
import { missingInstrumentsQuizQuestions } from './quizzes/missing-instruments-quiz';
import { sectionQuizQuestions } from './quizzes/section-quiz';
import { rhythmQuizQuestions } from './quizzes/rhythm-quiz';
import { bachataPartsQuizQuestions } from './quizzes/bachata-parts-quiz';
import { rhythmBuildingQuiz } from './quizzes/rhythm-building-quiz';
import { audioToSilhouetteQuiz, nameToSilhouetteQuiz, audioToNameQuiz } from './quizzes/label-the-band-quizzes';
import { progressManager } from '../components/common/ProgressBar';
import { historyQuiz } from './quizzes/history-quiz';
import { history7080Quiz } from './quizzes/history-70-80-quiz';
import { history9000Quiz } from './quizzes/history-90-00-quiz';
import { history1020Quiz } from './quizzes/history-10-20-quiz';
import { historyGlossary, musicGlossary, danceGlossary } from './glossaries';

export const sections: Section[] = [
  {
    id: 'history',
    title: 'History',
    description: 'Learn the history of Bachata',
    icon: BookOpen,
    color: 'bg-amber-100',
    comingSoon: false,
    lessons: [
      {
        id: 'history-50-60',
        title: 'Origins of Bachata',
        description: 'Learn about the origins of Bachata music',
        get progress() { return progressManager.getProgress('history', 'history-50-60'); }
      } as LessonSummary,
      { id: 'history-70-80', title: 'Consolidation of the genre', get progress() { return progressManager.getProgress('history', 'history-70-80'); }, comingSoon: false },
      { id: 'history-90-00', title: 'International expansion', get progress() { return progressManager.getProgress('history', 'history-90-00'); }, comingSoon: false },
      { id: 'history-10-20', title: 'Fusion of styles', get progress() { return progressManager.getProgress('history', 'history-10-20'); }, comingSoon: false }
    ],
    quizzes: [
      historyQuiz,
      history7080Quiz,
      history9000Quiz,
      history1020Quiz
    ],
    glossary: historyGlossary
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Learn the musical elements of Bachata',
    icon: Music2,
    color: 'bg-rose-100',
    lessons: [
      { id: 'instruments', title: 'Key Instruments', get progress() { return progressManager.getProgress('music', 'instruments'); } },
      { id: 'rhythm', title: 'Basic Rhythms', get progress() { return progressManager.getProgress('music', 'rhythm'); } },
      { id: 'structure', title: 'Song Structure', get progress() { return progressManager.getProgress('music', 'structure'); } },
      { id: 'phrasing', title: 'Musical Phrasing', comingSoon: true, get progress() { return progressManager.getProgress('music', 'phrasing'); } },
      { 
        id: 'artists', 
        title: 'Influential Artists', 
        comingSoon: true,
        get progress() { return progressManager.getProgress('music', 'artists'); } 
      },
      { 
        id: 'theory', 
        title: 'Music Theory (Additional)', 
        comingSoon: true,
        get progress() { return progressManager.getProgress('music', 'theory'); } 
      }
    ],
    quizzes: [
      {
        id: 'present-instruments',
        title: 'Instrument Recognition',
        description: 'Identify which instruments are playing',
        type: 'present',
        progress: 0, //will be set by progressManager but keep it to remind me if i need it for database users in the future
        questions: instrumentQuizQuestions
      },
      {
        id: 'missing-instruments',
        title: 'Missing Instruments',
        description: 'Identify which instruments are missing',
        type: 'missing',
        progress: 0,
        questions: missingInstrumentsQuizQuestions
      },
      {
        id: 'sections',
        title: 'Section Recognition',
        description: 'Identify which section is playing',
        type: 'sections',
        progress: 0,
        questions: sectionQuizQuestions
      },
      {
        id: 'rhythms',
        title: 'Rhythm Recognition',
        description: 'Identify which rhythm is playing',
        type: 'rhythms',
        progress: 0,
        questions: rhythmQuizQuestions
      },
      {
        id: 'bachata-parts',
        title: 'Bachata Parts',
        description: 'Identify which bachata part is playing',
        type: 'parts',
        progress: 0,
        questions: bachataPartsQuizQuestions
      },
      rhythmBuildingQuiz,
      audioToNameQuiz,
      nameToSilhouetteQuiz,
      audioToSilhouetteQuiz
    ],
    glossary: musicGlossary
  },
  {
    id: 'dance',
    title: 'Dance',
    description: 'Learn the fundamentals of Bachata dance',
    icon: Users,
    color: 'bg-blue-100',
    comingSoon: true,
    lessons: [
      { id: 'basic-steps', title: 'Basic Steps', get progress() { return progressManager.getProgress('dance', 'basic-steps'); } },
      { id: 'turns', title: 'Basic Turns', get progress() { return progressManager.getProgress('dance', 'turns'); } },
      { id: 'hip-movement', title: 'Hip Movement', get progress() { return progressManager.getProgress('dance', 'hip-movement'); } }
    ],
    glossary: danceGlossary
  }
]; 