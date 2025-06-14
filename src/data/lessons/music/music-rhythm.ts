import { MusicLesson } from '../../../types/Lesson';
import { createQuiz } from '../../../utils/quizHelpers';

export const musicRhythmLesson: MusicLesson = {
  id: 'music-rhythm',
  type: 'rhythm',
  title: 'Basic Rhythm & Structure',
  description: 'Musicality in Bachata: Understanding the Rhythms',
  introduction: 'Bachata is a deeply rhythmic and expressive genre, with its foundation built upon three main rhythms: **derecho**, **majao**, and **mambo**. These rhythms define the musical structure and guide dancers in interpreting the music.',
  video: 'https://www.youtube.com/watch?v=YuvvdHBcPp0',
  sections: [
    {
      id: 'intro',
      title: 'Introduction',
      content: 'In this section, we\'ll explore the three main rhythms of bachata and how they influence the dance.',
      interactiveBlocks: [
        {
          kind: 'quiz',
          id: 'rhythm-intro-q1',
          data: createQuiz(
            'rhythm-intro-q1',
            'How many main rhythms define bachata music?',
            [
              { text: 'Two (fast and slow)' },
              { text: 'Three (derecho, majao, and mambo)', isCorrect: true },
              { text: 'Four (including salsa rhythm)' },
              { text: 'Five (one for each instrument)' }
            ],
            'Bachata music is defined by three main rhythms: derecho (calm and grounded), majao (vibrant and upbeat), and mambo (energetic and expressive).'
          )
        }
      ]
    },
    {
      id: 'derecho',
      title: '1. Derecho',
      content: 'The **derecho** rhythm is the backbone of bachata, often providing the foundation for the verses and more relaxed sections of the music.',
      sections: [
        {
          id: 'derecho-instruments',
          title: 'Instruments',
          content: '',
          sections: [
            {
              id: 'derecho-bongos',
              title: 'Bongos',
              content: 'Plays a pattern called "martillo" (hammer) that is a steady and consistent pattern of eighth notes (two per beat). The 4th and 8th beats of each phrase are generally accentuated with a lower pitch, coinciding with the tap in the basic step.'
            },
            {
              id: 'derecho-guira',
              title: 'Güira',
              content: 'Adds a smooth, continuous scraping sound that maintains the tempo and complements the bongos. The güira\'s rhythm is also steady and acts as a metronome for the band and dancers.'
            }
          ]
        },
        {
          id: 'derecho-characteristics',
          title: 'Characteristics',
          content: 'Low to moderate energy level. This rhythm creates a calm, grounded feel, making it ideal for smooth, close-contact dancing.'
        },
        {
          id: 'derecho-placement',
          title: 'Musical Placement',
          content: 'Most commonly found in the **verses** or introduction sections of a bachata song. Its consistent and low energy nature allows dancers to settle into the music and focus on connection and basic steps or smooth movements.'
        }
      ],
      media: {
        audio: {
          //bongos: '/assets/audio/derecho-bongos.mp3',
          //guira: '/assets/audio/derecho-guira.mp3',
          samples: [
            {
              name: 'Bongos & Güira',
              path: '/assets/audio/rhythms/lesson/derecho-bongos-guira.mp3',
            },
            {
              name: 'Full',
              path: '/assets/audio/rhythms/lesson/derecho-full.mp3',
              song: 'Del Mar',
              artist: 'Sia, DJ Dimen5ions & DJ Alejandro'
            }
          ]
        }
      },
      interactiveBlocks: [
        {
          kind: 'quiz',
          id: 'derecho-q1',
          data: createQuiz(
            'derecho-q1',
            'Where in a bachata song is the derecho rhythm most commonly found?',
            [
              { text: 'During the climax' },
              { text: 'In the verses or introduction', isCorrect: true },
              { text: 'Only in the chorus' },
              { text: 'At the very end' }
            ],
            'The derecho rhythm is most commonly found in the verses or introduction sections of a bachata song, creating a calm, grounded feel ideal for smooth dancing.'
          )
        }
      ]
    },
    {
      id: 'majao',
      title: '2. Majao',
      content: 'The **majao** rhythm adds intensity and groove to the music, encouraging dancers to be more playful with their movements.',
      sections: [
        {
          id: 'majao-instruments',
          title: 'Instruments',
          content: '',
          sections: [
            {
              id: 'majao-bongos',
              title: 'Bongos',
              content: 'Play exactly on the beat notes, acting as a metronome for the most part. The rhythm is straightforward and steady. The 4th and 8th beats of each phrase are again accentuated with a lower pitch.'
            },
            {
              id: 'majao-guira',
              title: 'Güira',
              content: 'Mirrors the bongos by playing directly on the beat, reinforcing the steady, metronomic feel.'
            }
          ]
        },
        {
          id: 'majao-characteristics',
          title: 'Characteristics',
          content: 'Moderate to high energy level. The majao rhythm feels vibrant and upbeat, adding excitement to the music.'
        },
        {
          id: 'majao-placement',
          title: 'Musical Placement',
          content: 'Typically appears in **chorus** and in the so-called "mambo" section (different from the mambo rhythm below). It can also be found in **pre-chorus** sections or transitional moments in a song. It builds energy and sets the stage for more dynamic parts of the music.'
        }
      ],
      media: {
        audio: {
          //bongos: '/assets/audio/majao-bongos.mp3',
          //guira: '/assets/audio/majao-guira.mp3',
          samples: [
            {
              name: 'Bongos & Güira',
              path: '/assets/audio/rhythms/lesson/majao-bongos-guira.mp3'
            },
            {
              name: 'Full',
              path: '/assets/audio/rhythms/lesson/majao-full.mp3',
              song: 'Del Mar',
              artist: 'Sia, DJ Dimen5ions & DJ Alejandro'
            }
          ]
        }
      }
    },
    {
      id: 'mambo',
      title: '3. Mambo',
      content: 'The **mambo** rhythm, not to be confused with the [mambo section](/section/music/lesson/structure#mambo), is the most energetic and expressive rhythm in bachata. This rhythm is more commonly found in traditional bachata music rather than modern bachata, as it is heavily inspired by merengue.',
      sections: [
        {
          id: 'mambo-instruments',
          title: 'Instruments',
          content: '',
          sections: [
            {
              id: 'mambo-bongos',
              title: 'Bongos',
              content: 'The bongo will typically accentuate the beats, but has a lot more freedom in the mambo rhythm. The bongó solo (repique) is a hallmark of this rhythm'
            },
            {
              id: 'mambo-guira',
              title: 'Güira',
              content: 'The güira is the determining factor in driving the energy of the mambo rhythm. It incorporates the "a caballo" (horse-like) rhythm, consisting of a rapid sequence of eighth notes in groups of 3.'
            }
          ]
        },
        {
          id: 'mambo-characteristics',
          title: 'Characteristics',
          content: 'High to very high energy level. This rhythm is dynamic and electrifying, encouraging dancers to unleash their full creativity and energy.'
        },
        {
          id: 'mambo-placement',
          title: 'Musical Placement',
          content: 'Primarily found in instrumental breaks such as the "mambo" section, or climax of the song. The mambo rhythm often signals a peak moment in the music, where dancers can incorporate more playful styling and movements.'
        }
      ],
      media: {
        audio: {
          samples: [
            {
              name: 'Bongos & Güira',
              path: '/assets/audio/rhythms/lesson/mambo-bongos-guira.mp3'
            },
            {
              name: 'Full',
              path: '/assets/audio/rhythms/lesson/mambo-full.mp3',
              song: 'Perdido',
              artist: 'Yoskar Sarante'
            }
          ]
        }
      },
      interactiveBlocks: [
        {
          kind: 'quiz',
          id: 'mambo-rhythm-q1',
          data: createQuiz(
            'mambo-rhythm-q1',
            'What is the "a caballo" rhythm in the güira associated with?',
            [
              { text: 'The derecho rhythm' },
              { text: 'The majao rhythm' },
              { text: 'The mambo rhythm', isCorrect: true },
              { text: 'All bachata rhythms equally' }
            ],
            'The "a caballo" (horse-like) rhythm in the güira is characteristic of the mambo rhythm, consisting of rapid eighth notes in groups of 3 that drive the high energy of this rhythm.'
          )
        }
      ]
    }
  ],
  note: 'Across all rhythms in bachata, the bongos and guíra may play rolls and other ad libs, particularly at the end of a phrase and anticipating the "1" of each bar. These embellishments add texture, subtle variety, and excitement to the music, enhancing its expressiveness and providing cues for dancers to interpret dynamically. Dramatic breaks are also used accross the songs to add more variety and excitement to the music.',
  summary: 'Understanding these rhythms allows bachata dancers to adapt their movements to the music\'s energy and structure. Whether flowing smoothly with the **derecho**, grooving with the **majao**, or bursting with energy during the **mambo**, recognizing these patterns deepens your connection to the music and enhances your dance experience.\n\nPractice listening to each rhythm individually with the provided audio samples and notice how they interact within a full song.'
}; 