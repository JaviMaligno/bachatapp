import { Quiz } from '../../types';

export const history7080Quiz: Quiz = {
  id: 'history-70-80-quiz',
  type: 'history',
  title: 'Bachata Evolution Quiz (1970s-1980s)',
  description: 'Test your knowledge about bachata\'s evolution from underground music to mainstream beginnings',
  sectionTitle: 'History',
  questions: [
    {
      id: 1,
      question: 'Which of these names was NOT used to refer to bachata before the term "bachata" became widely accepted?',
      options: [
        { id: 'amargue', text: 'Amargue (bitterness)' },
        { id: 'musica', text: 'Música de guitarra (guitar music)' },
        { id: 'bolero', text: 'Bolero campesino (country bolero)' },
        { id: 'merengue', text: 'Merengue' }
      ],
      correctAnswer: 'merengue'
    },
    {
      id: 2,
      question: 'Which artist pioneered the use of electric guitar in bachata in the 1980s?',
      options: [
        { id: 'duran', text: 'Blas Durán' },
        { id: 'santos', text: 'Antony Santos' },
        { id: 'vargas', text: 'Luis Vargas' },
        { id: 'perez', text: 'Marino Perez' }
      ],
      correctAnswer: 'duran'
    },
    {
      id: 3,
      question: 'What 1987 hit song transformed bachata with electric lead guitar techniques?',
      options: [
        { id: 'mujeres', text: 'Mujeres hembras' },
        { id: 'aymami', text: 'Ay Mami' },
        { id: 'laespero', text: 'La Espero Bebiendo' },
        { id: 'bachata', text: 'Bachata Rosa' }
      ],
      correctAnswer: 'mujeres'
    },
    {
      id: 4,
      question: 'During the 1970s, where was bachata music primarily played?',
      options: [
        { id: 'bars', text: 'Bars, brothels, and neighborhood parties' },
        { id: 'radio', text: 'Mainstream radio stations' },
        { id: 'tv', text: 'Television programs' },
        { id: 'concert', text: 'Concert halls' }
      ],
      correctAnswer: 'bars'
    },
    {
      id: 5,
      question: 'What nickname was given to Marino Perez?',
      options: [
        { id: 'father', text: 'The Father of Bitter Bachata' },
        { id: 'king', text: 'The King of Bachata' },
        { id: 'voice', text: 'The Voice of Bachata' },
        { id: 'pioneer', text: 'The Pioneer of Electric Bachata' }
      ],
      correctAnswer: 'father'
    }
  ]
}; 