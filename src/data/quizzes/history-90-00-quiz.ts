import { Quiz } from '../../types';

export const history9000Quiz: Quiz = {
  id: 'history-90-00-quiz',
  type: 'history',
  title: 'Modern Bachata History Quiz',
  description: 'Test your knowledge about bachata\'s evolution from the 1990s to 2000s',
  sectionTitle: 'History',
  questions: [
    {
      id: 1,
      question: 'Juan Luis Guerra\'s influential 1990 album "Bachata Rosa" was actually:',
      options: [
        { id: 'bolero', text: 'Primarily a bolero album that helped popularize bachata' },
        { id: 'pure', text: 'A pure traditional bachata album' },
        { id: 'merengue', text: 'A merengue album with bachata influences' },
        { id: 'salsa', text: 'A salsa album with bachata rhythms' }
      ],
      correctAnswer: 'bolero'
    },
    {
      id: 2,
      question: 'Which group led by Romeo Santos pioneered "urban bachata" in the early 2000s?',
      options: [
        { id: 'aventura', text: 'Aventura' },
        { id: 'monchy', text: 'Monchy & Alexandra' },
        { id: 'prince', text: 'Prince Royce' },
        { id: 'toby', text: 'Toby Love' }
      ],
      correctAnswer: 'aventura'
    },
    {
      id: 3,
      question: 'What 2002 album by Aventura showcased their fusion of bachata with modern elements?',
      options: [
        { id: 'broke', text: 'We Broke the Rules' },
        { id: 'love', text: 'Love & Hate' },
        { id: 'god', text: 'God\'s Project' },
        { id: 'last', text: 'The Last' }
      ],
      correctAnswer: 'broke'
    },
    {
      id: 4,
      question: 'How did bachata evolve differently in the Dominican Republic compared to internationally?',
      options: [
        { id: 'formalization', text: 'It remained informal in DR but became formalized in dance academies abroad' },
        { id: 'extinction', text: 'It became extinct in DR but thrived internationally' },
        { id: 'commercialization', text: 'It was more commercialized in DR than internationally' },
        { id: 'simplification', text: 'It became more technically complex in DR but simplified abroad' }
      ],
      correctAnswer: 'formalization'
    },
    {
      id: 5,
      question: 'What was a significant factor in bachata\'s international spread during the 1990s?',
      options: [
        { id: 'migration', text: 'Dominican migration to the US and Europe' },
        { id: 'television', text: 'Television commercials featuring bachata' },
        { id: 'movies', text: 'Hollywood movies featuring bachata' },
        { id: 'olympics', text: 'Performances at the Olympic Games' }
      ],
      correctAnswer: 'migration'
    }
  ]
}; 