import { MusicLesson, Section } from '../../../types/Lesson';

export const musicInstrumentsLesson: MusicLesson = {
  id: 'music-instruments',
  type: 'instruments',
  title: 'Bachata Instruments',
  description: 'Learn about the key instruments that create the distinctive sound of bachata music.',
  sections: [
    {
      id: 'intro',
      title: 'Introduction',
      content: 'In this section, we will explore the key instruments that define the sound of bachata music. Each instrument plays a unique role in creating the rhythmic and melodic richness that makes bachata so distinctive. While these are the core instruments that define traditional bachata, additional instruments are often added, particularly in more modern and fusion styles of bachata.'
    },
    {
      id: 'requinto',
      title: '1. Requinto (Lead Guitar)',
      content: 'The requinto is the centerpiece of bachata music, responsible for the intricate melodies and improvisations that characterize the genre. It is smaller than a standard guitar, producing a higher pitch that allows it to stand out prominently in the mix.',
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
        image: '[Placeholder for requinto image]',
        audio: {
          sample: '[Placeholder for requinto audio sample]'
        },
        video: '[Placeholder for requinto technique video]'
      }
    } as Section,
    {
      id: 'segunda',
      title: '2. Segunda (Rhythmic Guitar)',
      content: 'The segunda provides the harmonic foundation and complements the requinto with steady rhythmic strumming.',
      sections: [
        {
          id: 'segunda-sound',
          title: 'Sound',
          content: 'The segunda has a more muted and percussive tone compared to the requinto, often achieved through palm muting.'
        },
        {
          id: 'segunda-role',
          title: 'Role',
          content: 'It maintains the chord progression and rhythmic structure, ensuring the music stays cohesive.'
        },
        {
          id: 'segunda-rhythms',
          title: 'Rhythms and Patterns',
          content: 'The segunda typically follows a syncopated pattern called "guajeo," which emphasizes off-beats and creates a lively, danceable rhythm. The segunda is essential for creating the iconic "bachata rhythm" that listeners instantly recognize, as it distinguishes bachata music from its predecessor: the (cuban) bolero.'
        }
      ],
      media: {
        image: '[Placeholder for segunda image]',
        audio: {
          pattern: '[Placeholder for segunda rhythm pattern]'
        },
        video: '[Placeholder for segunda strumming technique]'
      }
    } as Section,
    {
      id: 'bass',
      title: '3. Bass Guitar',
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
        image: '[Placeholder for bass image]',
        audio: {
          pattern: '[Placeholder for bass pattern]'
        },
        video: '[Placeholder for bass technique]'
      }
    } as Section,
    {
      id: 'guira',
      title: '4. Güira',
      content: 'The güira is a metal scraper that provides a crisp, driving rhythm.',
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
        image: '[Placeholder for güira image]',
        audio: {
          pattern: '[Placeholder for güira pattern]'
        },
        video: '[Placeholder for güira technique]'
      }
    } as Section,
    {
      id: 'bongos',
      title: '5. Bongos',
      content: 'The bongos bring a percussive element that enhances the rhythm and energy of bachata.',
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
        image: '[Placeholder for bongos image]',
      audio: {
          pattern: '[Placeholder for bongos pattern]'
        },
        video: '[Placeholder for bongos technique]'
      }
    } as Section,
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: 'These instruments together form the core of bachata\'s unique sound. Each has a vital role, contributing to the genre\'s emotional depth and rhythmic vibrancy.'
    },
    {
      id: 'note',
      title: 'Note',
      content: 'Some songs, particularly remixes, incorporate bongos and sometimes güira to make them suitable for dancing bachata, even though they are not bachata in the strict sense. These are humorously referred to as "bongochata".'
    }
  ]
};