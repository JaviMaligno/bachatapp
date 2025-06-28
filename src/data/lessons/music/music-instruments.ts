import { MusicLesson, Section } from '../../../types/Lesson';
import { createQuiz } from '../../../utils/quizHelpers';

export const musicInstrumentsLesson: MusicLesson = {
  id: 'music-instruments',
  type: 'instruments',
  title: 'Bachata Instruments',
  description: 'Learn about the key instruments that create the distinctive sound of bachata music.',
  video: 'https://www.youtube.com/watch?v=Ap7SYou1dnQ',
  sections: [
    {
      id: 'intro',
      title: 'Introduction',
      content: 'In this section, we will explore the key instruments that define the sound of bachata music. Each instrument plays a unique role in creating the rhythmic and melodic richness that makes bachata so distinctive. While these are the core instruments that define traditional bachata, additional instruments are often added, particularly in more modern and fusion styles of bachata.',
      interactiveBlocks: [
        {
          kind: 'quiz',
          id: 'instruments-intro-q1',
          data: createQuiz(
            'instruments-intro-q1',
            'How many core instruments typically define traditional bachata music?',
            [
              { text: 'Three (guitar, bass, drums)' },
              { text: 'Five (requinto, segunda, bass, güira, bongos)', isCorrect: true },
              { text: 'Seven (including piano and saxophone)' },
              { text: 'Two (just guitars)' }
            ],
            'Traditional bachata is defined by five core instruments: requinto (lead guitar), segunda (rhythm guitar), bass guitar, güira (metal scraper), and bongos.'
          )
        }
      ]
    },
    {
      id: 'requinto',
      title: 'Requinto (Lead Guitar)',
      content: 'The requinto is the centerpiece of bachata music, responsible for the intricate melodies and improvisations that characterize the genre. It is smaller than a standard guitar, producing a higher pitch that allows it to stand out prominently in the mix. In modern bachata, the traditional requinto is often replaced by a standard electric guitar, but the name is still used to refer to the lead guitar part.',
      sections: [
        {
          id: 'requinto-sound',
          title: 'Sound',
          content: 'The requinto produces a bright, sharp, and melodic tone. It often carries the main melody of the song, embellishing it with expressive slides, hammer-ons, and pull-offs.'
        },
        {
          id: 'requinto-role',
          title: 'Role',
          content: 'It plays a lead role, introducing the melody at the beginning of most songs and creating ornamentation throughout. The requinto frequently improvises during instrumental breaks.'
        },
        {
          id: 'requinto-rhythms',
          title: 'Rhythms and Patterns',
          content: 'The requinto often follows a syncopated rhythm, creating dynamic, off-beat accents. It employs melodic riffs and arpeggios to keep the music engaging.'
        }
      ],
      media: {
        image: {
          src: '/assets/images/instruments/requinto.jpg',
          caption: 'A classical guitar (left) and a requinto guitar (right)'
        },
        audio: {
          samples: [{
            name: 'Requinto',
            path: '/assets/audio/instruments/requinto.mp3'
          }]
        },
        //video: '/assets/videos/instruments/requinto.mp4'
      },
      interactiveBlocks: [
        {
          kind: 'quiz',
          id: 'requinto-q1',
          data: createQuiz(
            'requinto-q1',
            'What distinguishes a requinto from a standard guitar?',
            [
              { text: 'It has more strings' },
              { text: 'It is smaller and produces a higher pitch', isCorrect: true },
              { text: 'It is played with a bow' },
              { text: 'It has metal strings instead of nylon' }
            ],
            'The requinto is smaller than a standard guitar and produces a higher pitch, allowing it to stand out prominently in the mix and carry the main melody of bachata songs.'
          )
        }
      ]
    } as Section,
    {
      id: 'segunda',
      title: 'Segunda (Rhythmic Guitar)',
      content: 'The segunda is a regular guitar that provides the harmonic foundation and complements the requinto with steady rhythmic strumming.',
      sections: [
        {
          id: 'segunda-sound',
          title: 'Sound',
          content: 'The segunda has a more muted and percussive tone compared to the requinto, often achieved through palm muting.'
        },
        {
          id: 'segunda-role',
          title: 'Role',
          content: 'It maintains the chord progression and rhythmic structure, ensuring the music stays cohesive. Since it has a secondary role, it can easily be missed by the listener.'
        },
        {
          id: 'segunda-rhythms',
          title: 'Rhythms and Patterns',
          content: 'The segunda typically follows a syncopated pattern called "guajeo," which emphasizes off-beats and creates a lively, danceable rhythm. The segunda is essential for creating the iconic "bachata rhythm" that listeners instantly recognize, as it distinguishes bachata music from its predecessor: the (cuban) bolero.'
        }
      ],
      media: {
        image: {
          src: '/assets/images/instruments/segunda.png',
          caption: 'A guitar that can be used as a segunda'
        },
        audio: {
          samples: [{
            name: 'Segunda',
            path: '/assets/audio/instruments/segunda.mp3'
          }]
        },
        //video: '/assets/videos/instruments/segunda.mp4'
      }
    } as Section,
    {
      id: 'bass',
      title: 'Bass Guitar',
      content: 'The bass guitar provides depth and groove, anchoring the music with its low frequencies.',
      sections: [
        {
          id: 'bass-sound',
          title: 'Sound',
          content: 'The bass produces a warm, rounded tone that complements the higher-pitched guitars.'
        },
        {
          id: 'bass-role',
          title: 'Role',
          content: 'It establishes the harmonic foundation by outlining the root notes of the chord progression. The bass also adds syncopation, contributing to the danceable quality of bachata.'
        },
        {
          id: 'bass-rhythms',
          title: 'Rhythms and Patterns',
          content: 'The bass typically plays on the 1, and of 2, 3, and 4, and similarly on the 5, and of 6, 7 and 8. The syncopation between 2 and 3 is very characteristic, adding a unique and dynamic rhythm to bachata. The emphasis on the strong beats allows to easily find the 1 and 5 of the bar in the music. This pattern alternates between root and fifth notes, often with subtle embellishments.'
        }
      ],
      media: {
        image: {
          src: '/assets/images/instruments/bass.jpg',
          caption: 'A bass guitar'
        },
        audio: {
          samples: [{
            name: 'Bass',
            path: '/assets/audio/instruments/bass.mp3'
          }]
        },
        //video: '/assets/videos/instruments/bass.mp4'
      },
      interactiveBlocks: [
        {
          kind: 'quiz',
          id: 'bass-pattern-q1',
          data: createQuiz(
            'bass-pattern-q1',
            'What is characteristic about the bachata bass pattern between beats 2 and 3?',
            [
              { text: 'It plays a continuous note' },
              { text: 'It has syncopation', isCorrect: true },
              { text: 'It stops completely' },
              { text: 'It plays double time' }
            ],
            'The syncopation between beats 2 and 3 is very characteristic of bachata bass patterns, adding a unique and dynamic rhythm that distinguishes bachata from other Latin genres.'
          )
        }
      ]
    } as Section,
    {
      id: 'guira',
      title: 'Güira',
      content: 'The güira is a cheesegrater-looking metal scraper that provides a crisp, driving rhythm. It is played by dragging a stick across its ridged surface in a rhythmic pattern.',
      sections: [
        {
          id: 'guira-sound',
          title: 'Sound',
          content: 'The güira produces a high-pitched, metallic scraping sound. It is played by dragging a stick across its ridged surface in a rhythmic pattern.'
        },
        {
          id: 'guira-role',
          title: 'Role',
          content: 'It acts as a timekeeper, driving the rhythm forward and adding texture to the music. The güira\'s steady pulse is a hallmark of bachata.'
        },
        {
          id: 'guira-rhythms',
          title: 'Rhythms and Patterns',
          content: 'The güira typically plays steady, timekeeping patterns. The player often improvises subtle variations to keep the rhythm dynamic, maintaining a consistent pulse that drives the music forward.'
        }
      ],
      media: {
        image: {
          src: '/assets/images/instruments/guira.webp',
          caption: 'A güira'
        },
        audio: {
          samples: [{
            name: 'Güira',
            path: '/assets/audio/instruments/guira.wav'
          }]
        },
        //video: '/assets/videos/instruments/guira.mp4'
      }
    } as Section,
    {
      id: 'bongos',
      title: 'Bongos',
      content: 'The bongos bring a percussive element that enhances the rhythm and energy of bachata. They are a pair of drums that are played with the hands, each with a different pitch.',
      sections: [
        {
          id: 'bongos-sound',
          title: 'Sound',
          content: 'The bongos produce a rich, resonant tone, with contrasting high and low pitches from the smaller and larger drums.'
        },
        {
          id: 'bongos-role',
          title: 'Role',
          content: 'They add rhythmic complexity and highlight transitions in the music. Bongos are often used for solos during instrumental breaks.'
        },
        {
          id: 'bongos-rhythms',
          title: 'Rhythms and Patterns',
          content: 'The bongos typically follow a pattern called "martillo," which includes syncopated strokes and rolls to create a lively, energetic rhythm. However, they also adapt to different sections of a song, incorporating other patterns that enhance transitions and add variety to the rhythm.'
        }
      ],
      media: {
        image: {
          src: '/assets/images/instruments/bongos.jpg',
          caption: 'A set of bongos'
        },
        audio: {
          samples: [{
            name: 'Bongos',
            path: '/assets/audio/instruments/bongos.wav'
          }]
        },
        //video: '/assets/videos/instruments/bongos.mp4'
      }
    } as Section,
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: 'These instruments together form the core of bachata\'s unique sound. Each has a vital role, contributing to the genre\'s emotional depth and rhythmic vibrancy.',
      interactiveBlocks: [
        {
          kind: 'label-the-band',
          id: 'label-bachata-band',
          data: {
            id: 'label-bachata-band',
            title: 'Match Instruments to Their Stage Positions',
            instructions: 'Listen to each audio sample to identify the instrument, then drag it to the correct position on stage. Use both the sound and the instrument silhouette to make your match.',
            instruments: [
              { id: 'requinto', name: 'Requinto', audioPath: '/assets/audio/instruments/requinto.mp3', color: '#3B82F6' },
              { id: 'segunda', name: 'Segunda', audioPath: '/assets/audio/instruments/segunda.mp3', color: '#8B5CF6' },
              { id: 'bass', name: 'Bass', audioPath: '/assets/audio/instruments/bass.mp3', color: '#EF4444' },
              { id: 'guira', name: 'Güira', audioPath: '/assets/audio/instruments/guira.wav', color: '#F59E0B' },
              { id: 'bongos', name: 'Bongos', audioPath: '/assets/audio/instruments/bongos.wav', color: '#10B981' }
            ],
            positions: [
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
            ],
            explanation: 'In a traditional bachata band setup, the requinto (lead guitar) is prominently positioned for solos and melodies, while the segunda (rhythm guitar) provides harmonic support. The bass anchors the low frequencies, and the percussion instruments (bongos and güira) drive the rhythm from elevated positions where they can be clearly heard. By listening to each instrument\'s unique sound and recognizing their visual characteristics, you can better understand how they work together in the bachata ensemble.'
          }
        }
      ]
    },
    {
      id: 'note',
      title: 'Note',
      content: 'Some songs, particularly remixes, incorporate bongos and sometimes güira to make them suitable for dancing bachata, even though they are not bachata in the strict sense. These are humorously referred to as "bongochata".'
    }
  ]
};
