import { HistoryLesson } from '../../../types/Lesson';
import { createQuiz } from '../../../utils/quizHelpers';

export const history7080Lesson: HistoryLesson = {
  id: 'history-70-80',
  type: 'history',
  title: 'The Evolution of Bachata (1970s-1980s)',
  description: 'Exploring how bachata evolved from a marginalized rural expression to the beginnings of mainstream recognition',
  introduction: ' The 1970s and 1980s were pivotal decades in defining bachata as we know it today as it evolved from a marginalized rural expression to the beginnings of mainstream recognition.',
  image: '/assets/images/history/bachata7080.png', 
  sections: [
    {
      id: 'seventies',
      title: 'The 1970s: Underground Growth and the Birth of a Name',
      contentBlocks: [
        {
          content: 'During the 1970s, bachata remained largely an underground genre, confined to bars, brothels, and local neighborhood parties.\n\n## Cultural Marginalization\n- **Media Exclusion:** Even though the music was thriving among the working class, its raw lyrics and rustic instrumentation kept it out of mainstream media. It was seen as "music of bitterness" (*música de amargue*)—a term that underscored its themes of sorrow and social struggle.\n\n## Musical Characteristics\n- **Acoustic Foundations:** In this era, bachata was predominantly acoustic, featuring nylon-string guitars (often improvised with fishing line), bongos, and maracas. This stripped-down style was closely related to the bolero but was infused with uniquely Dominican rhythms and emotional vocal styles.\n\n## Emergence of the Name "Bachata"\n- **Previous names**: Before the term "bachata" became widely accepted, the music was known by other names such as amargue (meaning "bitterness"), bolero campesino (country bolero), and música de guitarra (guitar music). These names reflected both the melancholic themes of heartbreak and hardship in the lyrics and the rough, earthy sound produced by rural, working‐class musicians.\n\n- **From Insult to Identity:** Initially a disparaging term used to label the informal, rustic parties where this music was played, "bachata" eventually began to be adopted by the very musicians it once described. The name transformed from a mark of marginalization to a proud identifier of a vibrant musical culture.',
          interactiveBlocks: [
            {
              kind: 'quiz',
              id: 'bachata-70s-q1',
              data: createQuiz(
                'bachata-70s-q1',
                'What was bachata also known as in the 1970s that emphasized its themes of sorrow?',
                [
                  { text: 'Música alegre (happy music)' },
                  { text: 'Música de amargue (music of bitterness)', isCorrect: true },
                  { text: 'Música moderna (modern music)' },
                  { text: 'Música clásica (classical music)' }
                ],
                'Bachata was known as "música de amargue" (music of bitterness) in the 1970s, reflecting its themes of sorrow, heartbreak, and social struggle that resonated with the working class.'
              )
            }
          ]
        },
        {
          content: '## Key Artists\nWhile some pioneers like José Manuel Calderón had begun recording as early as 1962, the 1970s saw a new generation of bachateros emerging—artists who would record in local studios and perform in the very venues where bachata had been stigmatized. Vocalists and groups from this period (including early recordings by figures such as Rafael Encarnación and Ramoncito Cabrera) laid the groundwork for future evolution.',
          //media: {
            //images: [
              //{
                //src: '/assets/images/history/70s-bachateros.jpg',
                //caption: 'Bachateros performing in the 1970s'
              //}
            //]
          //}
        }
      ],
      sections: [
        {
          id: 'underground-status',
          title: 'Underground Status',
          content: '- Confined to bars, brothels, and neighborhood parties\n- Excluded from mainstream media\n- Known as "música de amargue" (music of bitterness)'
        },
        {
          id: 'name-evolution',
          title: 'Name Evolution',
          content: '- "Bachata" originally referred to rustic parties\n- Term was initially derogatory\n- Gradually adopted by musicians as a badge of pride'
        }
      ]
    },
    {
      id: 'eighties',
      title: 'The 1980s: Transformation and Mainstream Beginnings',
      contentBlocks: [
        {
          content: 'The 1980s marked a turning point for bachata as it began to break free from its underground status and adopt innovations that would set the stage for international recognition.\n\n## Technological and Instrumental Evolution\n- **Electric Revolution:** In this decade, musicians started to experiment with electric guitars and multitrack recording. Blas Durán was a pioneer in this regard—his 1987 hit "Mujeres hembras" introduced electric lead guitar techniques and faster tempos, which transformed the sound of bachata from its rustic acoustic origins to a more polished, dance-friendly style.',
          media: {
            audio: {
              samples: [
                {
                  name: 'Traditional Acoustic Bachata (1970s)',
                  spotifyLink: 'https://open.spotify.com/embed/track/16Ln0eqJETrfwBf8RbqmWw?utm_source=generator',
                  song: 'Sample from early recordings'
                },
                {
                  name: 'Electric Bachata (1980s)',
                  spotifyLink: 'https://open.spotify.com/embed/track/4wGhnh1XWu5LnmAbNqOSaO?utm_source=generator',
                  song: 'Mujeres Hembras - Blas Durán'
                }
              ]
            }
          },
          interactiveBlocks: [
            {
              kind: 'quiz',
              id: 'bachata-80s-q1',
              data: createQuiz(
                'bachata-80s-q1',
                'Who pioneered the use of electric guitar in bachata with the 1987 hit "Mujeres hembras"?',
                [
                  { text: 'Luis Vargas' },
                  { text: 'Antony Santos' },
                  { text: 'Blas Durán', isCorrect: true },
                  { text: 'Marino Perez' }
                ],
                'Blas Durán revolutionized bachata in 1987 with "Mujeres hembras," introducing electric lead guitar techniques and faster tempos that transformed the genre from acoustic to a more modern, dance-friendly style.'
              )
            }
          ]
        },
        {
          content: '## Changing Social Perceptions\n- **Growing Acceptance:** With these sonic innovations, bachata began to gain more airplay on radio stations and even made appearances on television. Although still looked down upon by some segments of society, its growing popularity among urban and working-class listeners began to challenge previous prejudices.\n\n- **Urban Migration Impact:** The modernization of bachata coincided with urban migration; as rural workers moved into cities like Santo Domingo, their music adapted to the urban soundscape.'
        },
        {
          content: '## Key Artists and Songs\n- **Luis Vargas and Antony Santos:** Emerging in the late 1980s and early 1990s, they incorporated the new electric elements and helped shift bachata into a pop format.\n\n- **Blas Durán:** His revolutionary recordings (like "Mujeres hembras") redefined the genre\'s sound.\n\n- **Marino Perez:** Known as "The Father of Bitter Bachata," his songs such as *Ay Mami* and *La Espero Bebiendo* resonated with listeners for their raw depiction of everyday struggles.\n\n## International Reach\n- **Early Migration:** Even in the 1980s, bachata began to cross borders. Although still largely confined to local radio and clubs in the Dominican Republic, the seeds were planted for its eventual migration to the United States. Many Dominicans who migrated during this period took their music with them, particularly to New York City\'s vibrant Latin music scene.',
          media: {
            audio: {
              samples: [
                {
                  name: 'Luis Vargas - Volvio el dolor',
                  spotifyLink: 'https://open.spotify.com/embed/track/0NnwEPjfSBJ9lHnck0g1Up?utm_source=generator',
                  song: 'Volvio el dolor - Luis Vargas'
                },
                {
                  name: 'Marino Perez - Ay Mami',
                  spotifyLink: 'https://open.spotify.com/embed/track/7EwZvAArDJQ1cxG0ZOajsL?utm_source=generator',
                  song: 'Ay Mami - Marino Perez'
                }
              ]
            }
          }
        }
      ],
      //artists: [
        //{
          //name: 'Blas Durán - Mujeres Hembras',
          //spotifyLink: 'https://open.spotify.com/embed/track/0Iu3jQzUiIQEenson9xzZP?utm_source=generator'
        //},
        //{
          //name: 'Marino Perez - Ay Mami',
          //spotifyLink: 'https://open.spotify.com/embed/track/5Oi3ZmfYt4JVZVrZiIbmkf?utm_source=generator'
        //}
      //],
      sections: [
        {
          id: 'technological-evolution',
          title: 'Technological Evolution',
          content: '- Introduction of electric guitars\n- Adoption of multitrack recording\n- Faster tempos and more polished production'
        },
        {
          id: 'key-innovators',
          title: 'Key Innovators',
          content: '- **Blas Durán:** Pioneer of electric bachata with "Mujeres hembras" (1987)\n- **Luis Vargas & Antony Santos:** Helped transition bachata toward pop format\n- **Marino Perez:** "The Father of Bitter Bachata"'
        }
      ]
    },
    {
      id: 'socioeconomic-shifts',
      title: 'Socioeconomic Shifts and Musical Influences',
      contentBlocks: [
        {
          content: 'During the 1970s and 1980s, the Dominican Republic was undergoing significant socioeconomic changes.\n\n## Economic and Social Transformation\n- **Post-Trujillo Era:** The post-Trujillo era saw increasing urbanization and a slow shift in cultural attitudes. As more people migrated from the countryside to cities, there was an increasing demand for music that reflected their lived experiences. Bachata, with its themes of love, loss, and the hardships of everyday life, struck a chord with these new urban audiences.\n\n## Musical Fusion\n- **Evolving Sound:** Traditional bolero and son influences merged with local styles and the added elements of merengue rhythms, paving the way for a more dance-oriented sound. This musical fusion not only enriched bachata\'s sonic palette but also helped it evolve into a dynamic dance genre.\n\n## From Marginalization to Cultural Identity\n- **Shifting Perceptions:** Initially stigmatized as "low-class" music played in seedy venues, bachata gradually became a proud symbol of Dominican cultural identity. Its evolution during the 70s and 80s laid the foundation for its later international success and recognition as an important musical and dance form.',
          interactiveBlocks: [
            {
              kind: 'quiz',
              id: 'bachata-transformation-q1',
              data: createQuiz(
                'bachata-transformation-q1',
                'What major demographic shift in the Dominican Republic helped bachata gain new audiences in the 1970s-80s?',
                [
                  { text: 'International tourism growth' },
                  { text: 'Rural-to-urban migration', isCorrect: true },
                  { text: 'Immigration from other countries' },
                  { text: 'Population decline' }
                ],
                'Rural-to-urban migration during the post-Trujillo era created new urban audiences who connected with bachata\'s themes of love, loss, and everyday hardships, helping transform it from rural music to urban cultural expression.'
              )
            }
          ]
        }
      ],
      sections: [
        {
          id: 'urban-migration',
          title: 'Urban Migration Impact',
          content: '- Rural-to-urban population movement\n- Music adapted to urban environments\n- New audiences in cities like Santo Domingo'
        },
        {
          id: 'cultural-identity',
          title: 'Cultural Identity Shift',
          content: '- From stigmatized "low-class" music to cultural pride\n- Reflection of Dominican working-class experience\n- Foundation for later international recognition'
        }
      ]
    }
  ],
  summary: 'The 1970s and 1980s were critical decades in the evolution of bachata—a time when a once-marginalized, rural sound was transformed through technological innovation, urban migration, and cultural resistance into a genre on the verge of international acclaim. From its early days as "amargue" or rustic bolero campesino to the modern electric-infused beats introduced by pioneers like Blas Durán, bachata\'s journey mirrors the socioeconomic transformations of the Dominican Republic itself. This evolution is a powerful reminder that music born from struggle can become a vibrant expression of national pride and global art.',
  references: [
    'https://en.wikipedia.org/wiki/Bachata_(music)',
    'https://www.bachatab.com/bachata-history-2',
    'https://en.wikipedia.org/wiki/Culture_of_the_Dominican_Republic',
    'https://revista.drclas.harvard.edu/dominican-bachata/',
    'https://bachatasociety.com/why-was-bachata-prohibited-in-the-past/'
  ]
}; 