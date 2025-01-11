import { MusicLesson } from '../../../types/Lesson';

export const musicStructureLesson: MusicLesson = {
  id: 'music-structure',
  type: 'structure',
  title: 'Bachata Song Structure',
  description: 'Understanding the different sections that make up a bachata song',
  introduction: 'Bachata music follows a structured format that helps tell a story through both lyrics and instrumental arrangements. Each section serves a specific purpose, contributing to the overall flow and energy of the song. Some sections are optional, but they are often used to enhance the song and make it more interesting. Often, sections are associated to rhythms, but this is not always the case as they can transition from one rhythm to another. To know what section you are listening, you need to understand the role it plays in the song structure.\n\nUnderstanding the structure of bachata songs helps dancers anticipate changes in energy and rhythm. Each section serves a specific purpose, from storytelling in the verses to high-energy expression in the mambo. This knowledge allows dancers to better interpret the music and adapt their movements accordingly.',
  sections: [
    {
      id: 'intro',
      title: '1. Intro',
      content: 'The intro sets the tone for the song and is usually instrumental. It can vary significantly across different styles of bachata.',
      sections: [
        {
          id: 'intro-styles',
          title: 'Common Styles',
          content: '- **Traditional Style**: Often features a guitar flick resembling a "fake mambo"\n- **Fusion Songs**: May begin with a non-bachata section where some or all the bachata instruments are missing\n<!-- - **Minimalist Approach**: Some songs quickly transition to the verse or chorus without an intro -->'
        },
        {
          id: 'intro-characteristics',
          title: 'Characteristics',
          content: 'Energy levels in the intro are typically on the lower end, creating a soft opening for the rest of the song. However, this is not always the case, as some intros are very energetic and set the tone for the rest of the song.'
        }
      ],
      media: {
        audio: {
          samples: [
            {
              name: 'Traditional Intro',
              path: '/assets/audio/sections/lesson/traditional-intro.mp3'
            },
            {
              name: 'Fusion Intro',
              path: '/assets/audio/sections/lesson/fusion-intro.mp3'
            },
            // {
            //   name: 'Minimalist Intro',
            //   path: '/assets/audio/sections/lesson/minimalist-intro.mp3'
            // }
          ]
        }
      }
    },
    {
      id: 'verse',
      title: '2. Verse',
      content: 'The verse is where the main story unfolds. It typically employs a **derecho rhythm**, maintaining a relatively low energy level to allow the narrative to take center stage. Instrumentally, the verse repeats accross the song, but the lyrics might change with each repetition.',
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
            path: '/assets/audio/sections/lesson/verse.mp3'
          }]
        }
      }
    },
    {
      id: 'pre-chorus-chorus',
      title: '3. Pre-Chorus and Chorus',
      content: 'The pre-chorus, when present, builds up energy and transitions smoothly into the chorus. The chorus is the catchiest and most memorable part of the song, often using a **majao rhythm** to stand out and elevate the energy compared to the verse. It also the part that is repeated more times, usually 3 or 4 times.',
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
            name: 'Pre-Chorus Example',
            path: '/assets/audio/sections/lesson/pre-chorus.mp3'
          },
          {
            name: 'Chorus Example',
            path: '/assets/audio/sections/lesson/chorus.mp3'
          },
          {
            name: 'Both Together',
            path: '/assets/audio/sections/lesson/pre-chorus-together.mp3'
          }
        ]
        }
      }
    },
    {
      id: 'mambo',
      title: '4. Mambo Section',
      content: 'The mambo section is an instrumental break and the most energetic part of the song. A guitar solo is a defining feature here, and the rhythm can be either **majao** or **mambo**. Most songs have only one mambo section, but some songs have multiple instances.',
      sections: [
        {
          id: 'fake-mambo',
          title: 'Fake Mambo',
          content: 'Usually precedes the actual mambo and mimics it instrumentally, but with a **derecho rhythm** for slightly lower energy. This term is not used by everyone. Some people would call it just mambo and some people would say it is derecho.'
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
            path: '/assets/audio/sections/lesson/mambo.mp3'
          },
          {
            name: 'Fake Mambo Example',
            path: '/assets/audio/sections/lesson/fake-mambo.mp3'
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
            path: '/assets/audio/sections/lesson/interlude.mp3'
          }]
        }
      }
    },
    {
      id: 'outro',
      title: '6. Outro',
      content: 'The outro wraps up the song and varies greatly. Some songs may even use the chorus as the outro.',
      sections: [
        {
          id: 'outro-types',
          title: 'Common Endings',
          content: '- **Traditional Conclusion:** An instrumental bachata ending\n- **Fusion Ending:** A non-bachata section where energy gradually diminishes, mirroring the intro <!-- - **Minimalist Ending:** No distinct outro, simply fading out\n -->'
        }
      ],
      media: {
        audio: {
          samples: [
            // {
            //   name: 'Minimalist Outro Example',
            //   path: '/assets/audio/sections/lesson/minimalist-outro.mp3'
            // },
          {
            name: 'Traditional Outro Example',
            path: '/assets/audio/sections/lesson/traditional-outro.mp3'
          },
          {
            name: 'Fusion Outro Example',
            path: '/assets/audio/sections/lesson/fusion-outro.mp3'
          }]
        }
      }
    }
  ],
  note: 'The terms "derecho" and "majao" can describe both rhythms and song sections in bachata where these rhythms are used, but notice that these are independent of terms used above, which refer to strucutral sections. In other words, a verse can be in derecho or majao, but it is still a verse. The mambo section is always called "mambo" regardless of whether it uses a mambo or majao rhythm.',
  summary: 'A typical bachata song consists of several key sections: an intro that sets the tone, verses that tell the story, a chorus that provides the memorable hook, and a high-energy mambo section featuring instrumental solos. Some songs may also include pre-chorus sections for building momentum, interludes that break from traditional bachata patterns, and outros that bring the song to a close.',
};
