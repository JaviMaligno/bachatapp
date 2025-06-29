import { LabelTheBandQuiz } from '../../types';

// Common instrument data used across all variations
const instruments = [
  { id: 'requinto', name: 'Requinto', audioPath: '/assets/audio/instruments/requinto.mp3', color: '#3B82F6' },
  { id: 'segunda', name: 'Segunda', audioPath: '/assets/audio/instruments/segunda.mp3', color: '#8B5CF6' },
  { id: 'bass', name: 'Bass', audioPath: '/assets/audio/instruments/bass.mp3', color: '#EF4444' },
  { id: 'guira', name: 'Güira', audioPath: '/assets/audio/instruments/guira.wav', color: '#F59E0B' },
  { id: 'bongos', name: 'Bongos', audioPath: '/assets/audio/instruments/bongos.wav', color: '#10B981' }
];

// Common positions used across silhouette-based variations
const positions = [
  {
    id: 'lead-position',
    x: 39,
    y: 58,
    width: 22,
    height: 30,
    label: 'Requinto',
    description: 'Lead guitar position - center stage for solos'
  },
  {
    id: 'rhythm-position',
    x: 70,
    y: 38,
    width: 22,
    height: 30,
    label: 'Segunda',
    description: 'Rhythm guitar - provides harmonic foundation'
  },
  {
    id: 'bass-position',
    x: 8,
    y: 38,
    width: 22,
    height: 30,
    label: 'Bass',
    description: 'Bass guitar - anchors the low end from stage left'
  },
  {
    id: 'percussion-left',
    x: 15,
    y: 12,
    width: 20,
    height: 25,
    label: 'Bongos',
    description: 'Hand percussion for rhythm and accents'
  },
  {
    id: 'percussion-right',
    x: 65,
    y: 12,
    width: 20,
    height: 25,
    label: 'Güira',
    description: 'Metal scraper for steady timekeeping'
  }
];

// Common explanation
const explanation = 'In a traditional bachata band setup, the requinto (lead guitar) is prominently positioned for solos and melodies, while the segunda (rhythm guitar) provides harmonic support. The bass anchors the low frequencies, and the percussion instruments (bongos and güira) drive the rhythm from elevated positions where they can be clearly heard. Understanding each instrument\'s unique sound and visual characteristics helps you appreciate how they work together in the bachata ensemble.';

// 1. Audio to Silhouette Quiz
export const audioToSilhouetteQuiz: LabelTheBandQuiz = {
  id: 'audio-to-silhouette',
  title: 'Match Audio to Instrument Silhouettes',
  description: 'Listen to each instrument and drag the audio to the correct silhouette on stage',
  sectionTitle: 'music',
  type: 'label-audio-to-silhouette',
  instructions: 'Listen to each audio sample to identify the instrument, then drag it to the correct silhouette position on stage. Use both the sound and the instrument silhouette to make your match.',
  instruments,
  positions,
  explanation
};

// 2. Name to Silhouette Quiz
export const nameToSilhouetteQuiz: LabelTheBandQuiz = {
  id: 'name-to-silhouette',
  title: 'Match Instrument Names to Silhouettes',
  description: 'Match instrument names to their corresponding silhouettes on stage',
  sectionTitle: 'music',
  type: 'label-name-to-silhouette',
  instructions: 'Look at the instrument silhouettes on stage and drag the correct instrument name to each position. Use your knowledge of instrument shapes and stage positioning to make the right matches.',
  instruments,
  positions,
  explanation
};

// 3. Audio to Name Quiz
export const audioToNameQuiz: LabelTheBandQuiz = {
  id: 'audio-to-name',
  title: 'Match Audio to Instrument Names',
  description: 'Listen to each instrument and match the audio to the correct instrument name',
  sectionTitle: 'music',
  type: 'label-audio-to-name',
  instructions: 'Listen to each audio sample and drag it to the correct instrument name. Focus on the unique sound characteristics of each bachata instrument.',
  instruments,
  positions: [], // Not used in this variation
  explanation: 'Each bachata instrument has distinctive sound characteristics: the requinto provides melodic leads with a bright, clear tone; the segunda offers rhythmic harmony with a fuller sound; the bass delivers deep, syncopated rhythms; the güira creates metallic scraping sounds; and the bongos add percussive accents with varying pitches. Learning to identify these sounds by ear is crucial for understanding bachata music structure.'
}; 