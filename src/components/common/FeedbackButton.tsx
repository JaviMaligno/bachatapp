import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const FeedbackButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    try {
      console.log('Attempting to send feedback:', { feedback, email });
      setIsSubmitting(true);
      const response = await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: feedback,
          email: email,
        }),
      });

      console.log('Response received:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || 'Failed to send feedback');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        setIsOpen(false);
        setFeedback('');
        setEmail('');
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Feedback error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label="Send Feedback"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Send Feedback</h2>
            <input
              type="email"
              className="w-full p-2 border rounded-lg mb-4 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Your email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="w-full h-32 p-2 border rounded-lg mb-4 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Please enter your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!feedback.trim() || isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
            </div>
            {submitStatus === 'success' && (
              <p className="text-green-500 mt-2">Feedback sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 mt-2">Failed to send feedback. Please try again.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}; 