import { HistoryLesson } from '../../../types/Lesson';

export const history5060Lesson: HistoryLesson = {
  id: 'history-50-60',
  type: 'history',
  title: 'The Origins of Bachata (1950s-1960s)',
  description: 'Understanding the historical roots and early development of bachata music in the Dominican Republic',
  introduction: 'Bachata is a uniquely Dominican musical and dance expression that emerged from the rural and working-class communities of the country. Although its roots stretch back into a mix of diverse Latin American musical traditions, the first decades—especially the 1950s and 1960s—were formative for the style that would later capture the world\'s imagination.\n\n"Bachata was once the music of the marginalized—a sound that expressed sorrow, longing, and the bittersweet realities of everyday life."',
  image: '/assets/images/history/map.png', 
  sections: [
    {
      id: 'historical-context',
      title: 'Historical and Socioeconomic Context',
      contentBlocks: [
        {
          content: 'During the 1950s and 1960s, bachata was not yet the polished, internationally acclaimed genre it is today. Instead, it was an informal expression of everyday hardship, affectionately (or disparagingly) called *amargue* ("bitterness"). Musicians in rural areas and urban shantytowns played guitar-based songs in small gatherings, bars and stores called \'Colmados\', and even brothels. These venues—far from the high-society ballrooms—became the cradle of bachata.\n\n## Social Status and Cultural Identity\n- **Origins in Working Class:** Bachata emerged from the poorest sectors of Dominican society\n- **Performance Venues:** Music was played in:\n  - Small informal gatherings\n  - Local bars and colmados\n  - Urban shantytowns\n  - Rural communities\n\n## Social Impact\n- **Social Stigma:**\n  - Looked down upon by Dominican elite\n  - Dismissed as crude or vulgar music\n  - Considered a cultural "black sheep"\n  - Excluded from mainstream recording and celebration\n\n- **Cultural Expression:**\n  - Powerful medium for storytelling\n  - Chronicles of love and heartbreak\n  - Documentation of social struggles\n  - Authentic voice of everyday Dominican life\n\n## Political Environment and Evolution\n- **Under Trujillo\'s Rule (1930-1961):**\n  - Strict government control of music industry\n  - Censorship of rural and "low culture" genres\n  - Bachata banned from mainstream media\n  - Marginalization of local musical expressions\n\n- **Post-Trujillo Period:**\n  - Easing of cultural restrictions\n  - Rural-to-urban musician migration\n  - Emergence of first official recordings\n  - Growth of bachata in Santo Domingo\n\n',
          interactiveBlocks: [
            {
              kind: 'quiz',
              id: 'bachata-origins-q1',
              data: {
                id: 'bachata-origins-q1',
                question: 'What was bachata originally called due to its expression of everyday hardship?',
                options: [
                  { id: 'a', text: 'Bolero' },
                  { id: 'b', text: 'Amargue (bitterness)' },
                  { id: 'c', text: 'Merengue' },
                  { id: 'd', text: 'Son' }
                ],
                correctAnswer: 'b',
                explanation: 'Bachata was originally called "amargue" which means "bitterness" in Spanish, reflecting its themes of hardship and sorrow.'
              }
            }
          ]
        }
      ],
      sections: [
        {
          id: 'social-aspects',
          title: 'Social Impact',
          content: '- Faced strong social stigma from Dominican elite\n- Served as powerful cultural expression for working class'
        },
        {
          id: 'political-context',
          title: 'Political Environment',
          content: '- Originally called "amargue" (bitterness)\n - Suppressed under Trujillo regime (1930-1961)\n- Gained freedom after Trujillo\'s assassination'
        }
      ]
    },
    {
      id: 'musical-influences',
      title: 'Musical Influences and Instrumentation',
      contentBlocks: [
        {
          content: 'Early bachata was not born in isolation. It drew heavily from various Latin American genres, reflecting the island\'s diverse cultural heritage.\n\n## A Fusion of Sounds\n- **Cuban Bolero and Son:** The melodic structures and romantic themes of the Cuban bolero deeply influenced the guitar work in early bachata. Similarly, the syncopated rhythms found in Cuban son provided a rhythmic backbone that bachata musicians would adapt for their own style.\n\n- **Puerto Rican Jíbaro Music:** Traditional folk songs from Puerto Rico, often associated with the countryside (jíbaro music), also contributed to the lyrical and melodic content of bachata. One of the most well-known figures in jíbaro music, El Jibarito de Lares (Odilio González), played a crucial role in popularizing the style that influenced early bachateros.\n\n- **Dominican Merengue:** Although merengue is now seen as a separate and equally vital genre in the Dominican Republic, its lively percussion and basic rhythmic elements influenced how bachata would eventually be danced and structured.\n\n## Instrumentation: The Building Blocks\n- The 1960s saw key innovations in bachata instrumentation that shaped its distinctive sound.\n\n- One of the most significant changes was the introduction of the **requinto guitar**, a smaller, high-pitched instrument that carried the lead melody, allowing for intricate and expressive solos. This change helped emphasize the emotional storytelling aspect of bachata, making its melodies more pronounced.',
          media: {
            audio: {
              samples: [
                {
                  name: 'Acoustic Guitar',
                  path: '/assets/audio/history/acoustic-guitar.wav',
                  song: ''
                },
                {
                  name: 'Requinto Guitar',
                  path: '/assets/audio/history/requinto.wav',
                  song: ''
                }
              ]
            }
          },
          interactiveBlocks: [
            {
              kind: 'quiz',
              id: 'bachata-influences-q1',
              data: {
                id: 'bachata-influences-q1',
                question: 'Which instrument was introduced in the 1960s to carry the lead melody in bachata?',
                options: [
                  { id: 'a', text: 'Bass Guitar' },
                  { id: 'b', text: 'Bongos' },
                  { id: 'c', text: 'Requinto Guitar' },
                  { id: 'd', text: 'Güira' }
                ],
                correctAnswer: 'c',
                explanation: 'The requinto guitar, a smaller high-pitched instrument, was introduced in the 1960s to carry the lead melody and allowed for intricate, expressive solos that emphasized bachata\'s emotional storytelling.'
              }
            }
          ]
        },
        {
          content: '- The **segunda guitar** was inherited from bolero, but a new way of playing it was developed by consistently using a thumb pick, contributing to the sharper sound of bachata compared to bolero.',
          media: {
            images: [
              {
                src: '/assets/images/history/thumb-pick.jpg',
                caption: 'Thumb Pick'
              }
            ],
            audio: {
              samples: [
                {
                  name: 'Bare fingers',
                  path: '/assets/audio/history/finger.mp3',
                  song: ''
                },
                {
                  name: 'Thumb pick',
                  path: '/assets/audio/history/thumbpick.mp3',
                  song: ''
                }
              ]
            }
          }
        },
        {
          content: '- The **bongos** were directly inherited from bolero, maintaining similar rhythmic patterns that would become characteristic of bachata. These distinctive percussion patterns helped preserve the connection to bachata\'s bolero roots while contributing to its unique sound.\n\n- The **bass guitar** was gradually incorporated as the instrument became more widely available, paralleling its adoption in bolero. However, bachata developed its own distinctive syncopated bass patterns that would become a defining characteristic of the genre.\n\n- Additionally, the **maracas**, which were traditionally used in bolero, were gradually replaced by the **güira**, a metal scraper. The güira provided a sharper, more percussive sound that better suited the danceable rhythms of bachata, giving the genre a more defined and infectious groove. These shifts in instrumentation refined the genre\'s sound, enhanced its danceability, and contributed to its eventual mainstream acceptance.',
          media: {
            audio: {
              samples: [
                {
                  name: 'Maracas',
                  path: '/assets/audio/history/maracas.mp3',
                  song: ''
                },
                {
                  name: 'Güira',
                  path: '/assets/audio/instruments/guira.wav',
                  song: ''
                }
              ]
            },
            images: [
              {
                src: '/assets/images/history/maracas.jpg',
                caption: 'Maracas'
              },
              {
                src: '/assets/images/history/guira.webp',
                caption: 'Güira'
              }
            ]
          }
        },
        {
          content: 'Learn more about the core instruments in bachata in the [Musical Instruments Lesson](/section/music/lesson/instruments).'
        }
      ],
      sections: [
        {
          id: 'influences',
          title: 'Key Influences',
          content: '- **Cuban Bolero and Son:** Provided melodic structures and syncopated rhythms\n- **Puerto Rican Jíbaro Music:** Contributed to lyrical and melodic content\n- **Dominican Merengue:** Influenced dance structure and rhythmic elements'
        },
        {
          id: 'instrumentation',
          title: 'Core Instruments',
          content: '- **Requinto (Lead Guitar):** Delivers signature arpeggiated melodies (newly introduced in 1960s)\n- **Segunda (Rhythm Guitar):** Provides underlying harmony (inherited from bolero, modified with thumb pick)\n- **Bass Guitar:** Offers the deep, resonant pulse with distinctive syncopated patterns (gradually introduced alongside bolero)\n- **Bongos:** Create the distinctive groove (inherited from bolero)\n- **Güira:** Creates the percussive rhythm (replaced bolero\'s maracas)'
        }
      ]
    },
    {
      id: 'pioneers',
      title: 'Key Artists and Precursors',
      contentBlocks: [
        {
          content: 'As the genre began to flourish after 1961, a number of pioneering artists laid the groundwork for what would become a major musical export of the Dominican Republic.\n\n## The First Bachateros\n- **José Manuel Calderón** is widely credited with recording the first official bachata songs in 1962, setting the stage for the genre\'s development. However, some debate exists regarding whether Calderón\'s "Borracho de Amor" qualifies as a true bachata song, given that it follows a vals (waltz) rhythm.\n\n- **Luis Segura\'s** "Cariñito de mi Vida" is sometimes cited as an early bachata, though it remains closer to a bolero, as confirmed by his son Edward Segura. Despite this, it showcased early hints of a groovier take on bolero that would later develop into bachata\'s characteristic sound.\n\n- **Other Pioneers:** Artists such as Rodobaldo Duartes, Rafael Encarnación, and Ramoncito Cabrera emerged in the following years, each adding their own nuances to the sound and helping bachata evolve from an underground style into a distinctive musical form.',
          interactiveBlocks: [
            {
              kind: 'quiz',
              id: 'bachata-pioneers-q1',
              data: {
                id: 'bachata-pioneers-q1',
                question: 'Who is widely credited with recording the first official bachata songs in 1962?',
                options: [
                  { id: 'a', text: 'Luis Segura' },
                  { id: 'b', text: 'José Manuel Calderón' },
                  { id: 'c', text: 'Rodobaldo Duartes' },
                  { id: 'd', text: 'Rafael Encarnación' }
                ],
                correctAnswer: 'b',
                explanation: 'José Manuel Calderón is widely credited with recording the first official bachata songs in 1962, though there is some debate about whether his "Borracho de Amor" was a true bachata due to its waltz rhythm.'
              }
            }
          ]
        }
      ],
      artists: [
        {
          name: 'José Manuel Calderón',
          spotifyLink: 'https://open.spotify.com/embed/track/52e7wksTZ2Os9EsFkYulSK?utm_source=generator'
        },
        {
          name: 'Luis Segura',
          spotifyLink: 'https://open.spotify.com/embed/track/1Q82tRGS6L5uA0xGmzzl71?utm_source=generator'
        }
      ],
      sections: [
        {
          id: 'first-artists',
          title: 'Notable Pioneers',
          content: '- **José Manuel Calderón:** Popularly credited with recording the first official bachata songs in 1962\n\n- **Luis Segura:** Early influential artist with bolero-style recordings\n\n- **Other Pioneers:** Rodobaldo Duartes, Rafael Encarnación, and Ramoncito Cabrera'
        }
      ]
    }
  ],
  summary: 'The origins of bachata in the 1950s and 1960s demonstrate how music can emerge from hardship and marginalization to become a universal language of emotion. Born in the rural and urban fringes of the Dominican Republic, influenced by various Latin American rhythms, bachata evolved from the voice of the oppressed to a genre that now fills international stadiums.',
  references: [
    'https://en.wikipedia.org/wiki/Bachata_(music)',
    'https://www.bachatab.com/bachata-history-2',
    'https://en.wikipedia.org/wiki/Culture_of_the_Dominican_Republic'
  ]
};
