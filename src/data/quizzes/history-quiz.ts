import { Quiz } from '../../types';

export const historyQuiz: Quiz = {
  id: 'history-50-60-quiz',
  type: 'history',
  title: 'Early Bachata History Quiz',
  description: 'Test your knowledge about the origins of bachata music in the 1950s and 1960s',
  sectionTitle: 'History',
  questions: [
    {
      id: 1,
      question: 'What was bachata music originally called due to its expression of hardship?',
      options: [
        { id: 'amargue', text: 'Amargue (bitterness)' },
        { id: 'alegria', text: 'Alegría (happiness)' },
        { id: 'tristeza', text: 'Tristeza (sadness)' },
        { id: 'pasion', text: 'Pasión (passion)' }
      ],
      correctAnswer: 'amargue'
    },
    {
      id: 2,
      question: 'Which political figure\'s rule significantly impacted early bachata through censorship?',
      options: [
        { id: 'trujillo', text: 'Rafael Trujillo' },
        { id: 'castro', text: 'Fidel Castro' },
        { id: 'duarte', text: 'Juan Pablo Duarte' },
        { id: 'bosch', text: 'Juan Bosch' }
      ],
      correctAnswer: 'trujillo'
    },
    {
      id: 3,
      question: 'Who is more widely credited with recording the first official bachata songs in 1962?',
      options: [
        { id: 'calderon', text: 'José Manuel Calderón' },
        { id: 'segura', text: 'Luis Segura' },
        { id: 'duartes', text: 'Rodobaldo Duartes' },
        { id: 'encarnacion', text: 'Rafael Encarnación' }
      ],
      correctAnswer: 'calderon'
    },
    {
      id: 4,
      question: 'Which instrument started replacing the traditional maracas in bachata during the 1960s?',
      options: [
        { id: 'guira', text: 'Güira' },
        { id: 'tambora', text: 'Tambora' },
        { id: 'clave', text: 'Clave' },
        { id: 'shaker', text: 'Shaker' }
      ],
      correctAnswer: 'guira'
    },
    {
      id: 5,
      question: 'Which musical genre heavily influenced bachata\'s melodic structures and romantic themes?',
      options: [
        { id: 'bolero', text: 'Cuban Bolero' },
        { id: 'salsa', text: 'Salsa' },
        { id: 'merengue', text: 'Merengue' },
        { id: 'cumbia', text: 'Cumbia' }
      ],
      correctAnswer: 'bolero'
    }
  ]
}; 