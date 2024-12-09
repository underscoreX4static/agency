import React, { useState } from "react";

const Faq = () => {
  const questions = [
    { id: 1, question: "Question 1", answer: "Réponse à la question 1." },
    { id: 2, question: "Question 2", answer: "Réponse à la question 2." },
    { id: 3, question: "Question 3", answer: "Réponse à la question 3." },
    { id: 4, question: "Question 4", answer: "Réponse à la question 4." },
    { id: 5, question: "Question 5", answer: "Réponse à la question 5." },
    { id: 6, question: "Question 6", answer: "Réponse à la question 6." },
    { id: 7, question: "Question 7", answer: "Réponse à la question 7." },
    { id: 8, question: "Question 8", answer: "Réponse à la question 8." },
    { id: 9, question: "Question 9", answer: "Réponse à la question 9." },
    { id: 10, question: "Question 10", answer: "Réponse à la question 10." },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="faq py-16 px-4 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        F.A.Q
      </h2>
      <div className="accordion max-w-4xl mx-auto">
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            className={`accordion-content bg-white text-black rounded-md shadow-lg mb-4 ${
              openQuestion === id ? "border-l-4 border-purple-600" : ""
            }`}
          >
            <header
              onClick={() => toggleQuestion(id)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-100"
            >
              <span className="font-medium text-lg">{question}</span>
              <i
                className={`fa-solid fa-${
                  openQuestion === id ? "minus" : "plus"
                } text-xl text-purple-600`}
              ></i>
            </header>
            {openQuestion === id && (
              <p className="description px-6 py-4 text-gray-700">
                {answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;