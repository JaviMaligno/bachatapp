import { Quiz } from '../../types';

export const history1020Quiz: Quiz = {
  id: 'history-10-20-quiz',
  type: 'history',
  title: 'Bachata History Quiz (2010s-2020s)',
  description: "Test your knowledge on bachata's global boom and diversification in the digital age.",
  sectionTitle: 'History',
  questions: [
    {
      id: 1,
      question: 'Which artist dominated tropical charts in the early 2010s with solo albums like "Formula Vol. 1 & 2"?',
      options: [
        { id: 'romeo', text: 'Romeo Santos' },
        { id: 'prince', text: 'Prince Royce' },
        { id: 'turizo', text: 'Manuel Turizo' },
        { id: 'guerra', text: 'Juan Luis Guerra' }
      ],
      correctAnswer: 'romeo'
    },
    {
      id: 2,
      question: 'Which one of the following is not a recognized bachata fusion style mentioned in the lesson?',
      options: [
        { id: 'bachazouk', text: 'Bachazouk' },
        { id: 'bachatango', text: 'Bachatango' },
        { id: 'bacharuka', text: 'Bacharuka' },
        { id: 'urban', text: 'Urban Fusion' },
        { id: 'flamenco', text: 'Flamenco Fusion' }
      ],
      correctAnswer: 'bacharuka'
    },
    {
      id: 3,
      question: 'Which Spanish dancers are credited with formalizing the "Bachata Sensual" style?',
      options: [
        { id: 'korkejudith', text: 'Korke & Judith' },
        { id: 'danieldesiree', text: 'Daniel y Desiree' },
        { id: 'atacaalemana', text: 'Ataca y La Alemana' },
        { id: 'alexdesiree', text: 'Alex & Desiree' }
      ],
      correctAnswer: 'korkejudith'
    },
    {
      id: 4,
      question: 'What platform featured the #bachatachallenge, reaching over 1.5 billion views and boosting new dancers?',
      options: [
        { id: 'youtube', text: 'YouTube' },
        { id: 'tiktok', text: 'TikTok' },
        { id: 'soundcloud', text: 'SoundCloud' },
        { id: 'facebook', text: 'Facebook' }
      ],
      correctAnswer: 'tiktok'
    },
    {
      id: 5,
      question: 'What significant international recognition did the "Music and Dance of Dominican Bachata" receive in December 2019?',
      options: [
        { id: 'grammy', text: 'Grammy Award for Best Tropical Album' },
        { id: 'unesco', text: 'UNESCO Intangible Cultural Heritage status' },
        { id: 'olympics', text: 'Olympic Games demonstration sport status' },
        { id: 'nobel', text: 'Nobel Peace Prize nomination' }
      ],
      correctAnswer: 'unesco'
    }
  ]
}; 