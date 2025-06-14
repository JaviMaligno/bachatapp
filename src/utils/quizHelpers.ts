import { InlineQuizData } from '../types/Lesson';

export const createQuiz = (
  id: string,
  question: string,
  options: { text: string; isCorrect?: boolean }[],
  explanation: string
): InlineQuizData => {
  // Find the correct answer
  const correctOption = options.find(opt => opt.isCorrect);
  if (!correctOption) {
    throw new Error(`No correct answer specified for quiz ${id}`);
  }

  // Generate option IDs
  const quizOptions = options.map((opt, index) => ({
    id: String.fromCharCode(97 + index), // 'a', 'b', 'c', 'd'
    text: opt.text
  }));

  const correctAnswerId = quizOptions.find(
    opt => opt.text === correctOption.text
  )?.id || 'a';

  return {
    id,
    question,
    options: quizOptions,
    correctAnswer: correctAnswerId,
    explanation
  };
}; 