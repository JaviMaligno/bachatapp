import { RhythmBuildingQuiz } from '../../types';

export const rhythmBuildingQuiz: RhythmBuildingQuiz = {
  id: 'rhythm-building',
  title: 'Build the Rhythms',
  description: 'Test your knowledge by building the three main bachata rhythms',
  sectionTitle: 'Music',
  type: 'rhythm-building',
  challenges: [
    {
      id: 'build-derecho',
      title: 'Build the Derecho Pattern',
      instructions: 'Create the basic derecho rhythm. Click once for a regular eighth note, twice for an accented (lower-pitch) eighth note, and a third time to clear it. The derecho plays steady eighth notes with accents on beats 4 and 8.',
      rhythmType: 'derecho',
      pattern: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1], // 16 eighth notes, accents on 8th and 16th
      bpm: 105,
      explanation: 'The derecho pattern consists of steady eighth notes (two per beat) with lower-pitched accents on the 4th and 8th beats (positions 8 and 16). This creates the characteristic "martillo" (hammer) pattern that forms the backbone of bachata.'
    },
    {
      id: 'build-majao',
      title: 'Build the Majao Pattern',
      instructions: 'Create the majao rhythm. Click once for a regular eighth note, twice for an accented eighth note, and a third time to clear it. Majao plays only on the main beats (not the off-beats), with accents on beats 4 and 8.',
      rhythmType: 'majao',
      pattern: [1, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 2, 0], // 16 eighth notes, only on main beats, accents on 4th and 8th
      bpm: 105,
      explanation: 'The majao pattern plays directly on the beat with steady quarter notes, emphasizing beats 4 and 8 with lower-pitched accents. This creates the metronomic feel that drives the chorus sections.'
    },
    {
      id: 'build-mambo',
      title: 'Build the Mambo "A Caballo" Pattern',
      instructions: 'Create the mambo rhythm with sixteenth note subdivisions. The "a caballo" pattern features rapid triplet-like groupings within the sixteenth note grid. Click once for a regular sixteenth note, twice for an accented one, and a third time to clear it.',
      rhythmType: 'mambo',
      pattern: [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1], // 16 sixteenth notes showing "a caballo" pattern
      bpm: 105,
      explanation: 'The mambo "a caballo" pattern uses rapid sixteenth note sequences that create a galloping, horse-like rhythm. The pattern groups notes in threes within the sixteenth note subdivisions, giving mambo its characteristic high-energy, driving feel that distinguishes it from derecho and majao rhythms.'
    }
  ]
}; 