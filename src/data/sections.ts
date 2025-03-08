import { BookOpen, Music2, Users } from 'lucide-react';
import { Section, LessonSummary, GlossarySection } from '../types/Lesson';
import { instrumentQuizQuestions } from './quizzes/instrument-quiz';
import { missingInstrumentsQuizQuestions } from './quizzes/missing-instruments-quiz';
import { sectionQuizQuestions } from './quizzes/section-quiz';
import { rhythmQuizQuestions } from './quizzes/rhythm-quiz';
import { bachataPartsQuizQuestions } from './quizzes/bachata-parts-quiz';
import { progressManager } from '../components/common/ProgressBar';
import { historyQuiz } from './quizzes/history-quiz';

const historyGlossary: GlossarySection[] = [
  {
    category: 'General Terms',
    terms: [
      {
        term: "Amargue",
        definition: "A style of dancing and singing bachata characterized by a bitter, sorrowful expression of unrequited love"
      },
      {
        term: "Cuban Bolero",
        definition: "A Latin music genre that heavily influenced early bachata"
      },
      {
        term: "Colmado",
        definition: "A small corner store in the Dominican Republic that sells a variety of goods and serves as a social gathering place"
      },
      {
        term: "Guitar Music",
        definition: "The original name for bachata before it was formally recognized as a genre"
      }
    ]
  }
];

const musicGlossary: GlossarySection[] = [
  {
    category: 'Instruments',
    terms: [
      { 
        term: 'Requinto', 
        definition: 'The lead guitar in bachata music that plays intricate melodies and improvisations. It has a higher pitch than standard guitar and is responsible for carrying the main melody and creating ornamentations throughout the song.'
      },
      { 
        term: 'Segunda', 
        definition: 'The rhythm guitar in bachata that provides the harmonic foundation with steady rhythmic strumming. It follows a syncopated pattern called "guajeo" and creates the iconic bachata rhythm through palm-muted playing.'
      },
      { 
        term: 'Bass', 
        definition: 'The bass guitar provides depth and groove by outlining chord progressions. It follows a distinctive syncopated pattern emphasizing beats 1 and 5, alternating between root and fifth notes.'
      },
      { 
        term: 'Bongo', 
        definition: 'A pair of drums played with hands that add rhythmic complexity to bachata. They typically follow a "martillo" pattern and are used for highlighting transitions and solos during instrumental breaks.'
      },
      { 
        term: 'Guira', 
        definition: 'A metal scraper percussion instrument that provides a crisp, driving rhythm with its high-pitched metallic sound. It acts as a timekeeper and its steady pulse is a hallmark of bachata music.'
      },
    ]
  },
  {
    category: 'Rhythms',
    terms: [
      { 
        term: 'Derecho', 
        definition: 'The foundational bachata rhythm with low to moderate energy, characterized by steady, consistent patterns in the bongos and güira. Commonly found in verses and creates a calm, grounded feel ideal for smooth dancing.'
      },
      { 
        term: 'Majao', 
        definition: 'A moderate to high energy rhythm where bongos and güira play directly on the beat. Typically appears in chorus sections, adding vibrancy and excitement to the music.'
      },
      { 
        term: 'Mambo', 
        definition: 'The most energetic bachata rhythm, featuring rapid güira patterns ("a caballo") and expressive bongo solos. Common in traditional bachata during instrumental breaks and climactic moments.'
      }
    ]
  },
  {
    category: 'Bachata Sections',
    terms: [
      { 
        term: 'Verse', 
        definition: 'The main body of a bachata song, typically containing the lyrics and melody. It is the most common section in bachata and often features a repeated structure.'
      },
      {
        term: 'Chorus',
        definition: 'The catchiest and most memorable part of the song, typically using a majao rhythm with higher energy than the verse. It repeats several times throughout the song and contains key lyrical phrases.'
      },
      {
        term: 'Pre-Chorus',
        definition: 'An optional section that builds momentum and energy while transitioning from the verse into the chorus.'
      },
      {
        term: 'Mambo',
        definition: 'An instrumental break featuring guitar solos and vocal ad libs. Can use either derecho, majao, or mambo rhythm and is usually the most energetic part of the song.'
      },
      {
        term: 'Interlude',
        definition: 'A break from traditional bachata beats, common in fusion styles. Often placed after the mambo section and may incorporate elements from other music genres.'
      },
      {
        term: 'Intro',
        definition: 'The opening section that sets the tone for the song, usually instrumental. Can range from traditional guitar flicks to fusion-style arrangements.'
      },
      {
        term: 'Outro',
        definition: 'The closing section of the song that can take various forms, from traditional instrumental conclusions to fusion endings that mirror the intro.'
      }
    ]
  }
];

const danceGlossary: GlossarySection[] = [
  {
    category: 'Basic Movements',
    terms: [
      { term: "Basic Step", definition: "The fundamental 8-count step sequence in bachata" },
      { term: "Tap", definition: "The subtle foot tap without weight transfer on counts 4 and 8 in basic bachata steps" }
    ]
  }
];

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
      { id: 'history-70-80', title: 'Consolidation of the genre', get progress() { return progressManager.getProgress('history', 'history-60-70'); }, comingSoon: false },
      { id: 'history-80-90', title: 'International expansion', get progress() { return progressManager.getProgress('history', 'history-70-80'); }, comingSoon: true },
      { id: 'history-90-00', title: 'Fusion of styles', get progress() { return progressManager.getProgress('history', 'history-80-90'); }, comingSoon: true }
    ],
    quizzes: [
      historyQuiz
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
      }
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