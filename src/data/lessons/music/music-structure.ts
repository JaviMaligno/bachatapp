import { MusicLesson } from '../../../types/Lesson';

export const musicStructureLesson: MusicLesson = {
  id: 'music-structure',
  type: 'structure',
  title: 'Bachata Song Structure',
  description: 'Understanding the different sections that make up a bachata song',
  introduction: 'Bachata music follows a structured format that helps tell a story through both lyrics and instrumental arrangements. Each section serves a specific purpose, contributing to the overall flow and energy of the song.',
  sections: [
    {
      id: 'intro',
      title: '1. Intro',
      content: 'The intro sets the tone for the song and is usually instrumental. It can vary significantly across different styles of bachata.',
      sections: [
        {
          id: 'intro-styles',
          title: 'Common Styles',
          content: '- **Fusion Songs**: May begin with a non-bachata section\n- **Traditional Style**: Often features a guitar flick resembling a "fake mambo"\n- **Minimalist Approach**: Some songs skip the intro entirely'
        },
        {
          id: 'intro-characteristics',
          title: 'Characteristics',
          content: 'Energy levels in the intro are typically on the lower end, creating a soft opening for the rest of the song.'
        }
      ],
      media: {
        audio: {
          samples: [
            {
              name: 'Fusion Intro',
              path: '/assets/audio/intro-fusion-sample.mp3'
            },
            {
              name: 'Traditional Intro',
              path: '/assets/audio/intro-traditional-sample.mp3'
            },
            {
              name: 'Minimalist Intro',
              path: '/assets/audio/intro-minimalist-sample.mp3'
            }
          ]
        }
      }
    },
    {
      id: 'verse',
      title: '2. Verse',
      content: 'The verse is where the main story unfolds. It typically employs a **derecho rhythm**, maintaining a relatively low energy level to allow the narrative to take center stage.',
      sections: [
        {
          id: 'verse-characteristics',
          title: 'Key Characteristics',
          content: '- Story-driven lyrics\n- Steady and subtle rhythm'
        }
      ],
      media: {
        audio: {
          samples: [{
            name: 'Verse Example',
            path: '/assets/audio/verse-sample.mp3'
          }]
        }
      }
    },
    {
      id: 'pre-chorus-chorus',
      title: '3. Pre-Chorus and Chorus',
      content: 'The pre-chorus, when present, builds up energy and transitions smoothly into the chorus. The chorus is the catchiest and most memorable part of the song, often using a **majao rhythm** to stand out and elevate the energy compared to the verse.',
      sections: [
        {
          id: 'chorus-characteristics',
          title: 'Key Characteristics',
          content: '- Pre-chorus introduces momentum\n- Chorus features high energy and repetition of key lyrical phrases or themes'
        }
      ],
      media: {
        audio: {
          samples: [{
            name: 'Chorus Example',
            path: '/assets/audio/chorus-sample.mp3'
          },
          {
            name: 'Pre-Chorus Example',
            path: '/assets/audio/pre-chorus-sample.mp3'
          }
        ]
        }
      }
    },
    {
      id: 'mambo',
      title: '4. Mambo Section',
      content: 'The mambo section is an instrumental break and the most energetic part of the song. A guitar solo is a defining feature here, and the rhythm can be either **majao** or **mambo**.',
      sections: [
        {
          id: 'fake-mambo',
          title: 'Fake Mambo',
          content: 'Precedes the actual mambo and mimics it instrumentally, but with a **derecho rhythm** for slightly lower energy.'
        },
        {
          id: 'mambo-characteristics',
          title: 'Key Characteristics',
          content: '- High energy\n- Focus on instrumental solos (especially guitar)'
        }
      ],
      media: {
        audio: {
          samples: [{
            name: 'Mambo Example',
            path: '/assets/audio/mambo-sample.mp3'
          },
          {
            name: 'Fake Mambo Example',
            path: '/assets/audio/fake-mambo-sample.mp3'
          }]
        }
      }
    },
    {
      id: 'interlude',
      title: '5. Interlude',
      content: 'More common in fusion styles, the interlude breaks away from traditional bachata beats. It is often placed after the mambo and may resemble the structure of pop songs. A bridge may be used to connect the interlude with other bachata sections.',
      media: {
        audio: {
          samples: [{
            name: 'Interlude Example',
            path: '/assets/audio/interlude-sample.mp3'
          }]
        }
      }
    },
    {
      id: 'outro',
      title: '6. Outro',
      content: 'The outro wraps up the song and varies greatly:',
      sections: [
        {
          id: 'outro-types',
          title: 'Common Endings',
          content: '- **Minimalist Ending:** No distinct outro, simply fading out\n- **Traditional Conclusion:** A typical bachata ending\n- **Fusion Ending:** A non-bachata section where energy gradually diminishes'
        }
      ],
      media: {
        audio: {
          samples: [{
            name: 'Minimalist Outro Example',
            path: '/assets/audio/outro-minimalist-sample.mp3'
          },
          {
            name: 'Traditional Outro Example',
            path: '/assets/audio/outro-traditional-sample.mp3'
          },
          {
            name: 'Fusion Outro Example',
            path: '/assets/audio/outro-fusion-sample.mp3'
          }]
        }
      }
    }
  ],
  note: 'The terms "derecho" and "majao" can describe both rhythms and song sections in bachata where these rhythms are used, but notice that these are independent of terms used above, which refer to strucutral sections. In other words, a verse can be in derecho or majao, but it is still a verse. The mambo section is always called "mambo" regardless of whether it uses a mambo or majao rhythm.',
  summary: 'Understanding the structure of bachata songs helps dancers anticipate changes in energy and rhythm. Each section serves a specific purpose, from storytelling in the verses to high-energy expression in the mambo. This knowledge allows dancers to better interpret the music and adapt their movements accordingly.'
};
