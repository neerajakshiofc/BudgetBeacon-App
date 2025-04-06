import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "What is compound interest?",
    options: [
      "Interest on the principal only",
      "Interest on both principal and accumulated interest",
      "A type of loan",
      "A stock market term"
    ],
    answer: 1
  },
  {
    question: "What does SIP stand for in finance?",
    options: [
      "Systematic Investment Plan",
      "Savings in Portfolio",
      "Secure Investment Program",
      "Stock Index Portfolio"
    ],
    answer: 0
  },
  {
    question: "Which one is considered a low-risk investment?",
    options: [
      "Cryptocurrency",
      "Government Bonds",
      "Stock Market",
      "Real Estate"
    ],
    answer: 1
  },
  {
    question: "What is a mutual fund?",
    options: [
      "A government savings account",
      "A type of loan with fixed interest",
      "An investment vehicle pooling money from investors",
      "A company that sells insurance"
    ],
    answer: 2
  },
  {
    question: "What does diversification in investing mean?",
    options: [
      "Putting all money in one asset",
      "Spending money across shopping",
      "Spreading investments across assets to reduce risk",
      "Saving only in a fixed deposit"
    ],
    answer: 2
  }
];

const FinancialQuiz = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentQIndex];

  const handleSubmit = () => {
    if (selectedOption === null) return;

    setSubmitted(true);
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSubmitted(false);
    setSelectedOption(null);
    setCurrentQIndex((prev) => prev + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Finance Quiz</h2>
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md max-w-xl mx-auto">
        <h3 className="font-medium mb-4">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                className="mr-2"
                disabled={submitted}
              />
              <label htmlFor={`option-${index}`} className="cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>

        {!submitted ? (
          <button
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        ) : (
          <>
            <div className="mt-4 text-sm">
              {selectedOption === currentQuestion.answer ? (
                <span className="text-green-600 font-medium">Correct! 🎉</span>
              ) : (
                <span className="text-red-600 font-medium">
                  Incorrect. The correct answer is: <strong>{currentQuestion.options[currentQuestion.answer]}</strong>
                </span>
              )}
            </div>
            {currentQIndex < quizQuestions.length - 1 ? (
              <button
                className="mt-4 bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition"
                onClick={handleNext}
              >
                Next Question
              </button>
            ) : (
              <div className="mt-4 font-semibold text-blue-700">
                Quiz Finished! Your score: {score}/{quizQuestions.length}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FinancialQuiz;
