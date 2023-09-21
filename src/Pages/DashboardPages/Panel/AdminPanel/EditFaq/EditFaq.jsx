import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const EditFaq = () => {
  const [questions, setQuestions] = useState([
    {
      _id: 1,
      question: "What is the capital of France?",
      answer: "Paris is the capital of France.",
    },
    {
      _id: 2,
      question: "How many planets are in our solar system?",
      answer: "There are eight planets in our solar system.",
    },
    {
      _id: 3,
      question: "How many planets are in our solar system?",
      answer: "There are eight planets in our solar system.",
    },
    {
      _id: 4,
      question: "How many planets are in our solar system?",
      answer: "There are eight planets in our solar system.",
    },
  ]);

  const toggleQuestion = (_id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q._id === _id ? { ...q, active: !q.active } : q
      )
    );
  };

  const handleQuestionChange = (_id, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q._id === _id ? { ...q, question: value } : q))
    );
  };

  const handleAnswerChange = (_id, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q._id === _id ? { ...q, answer: value } : q))
    );
  };

  const newFaqHandler = () => {
    setQuestions([
      ...questions,
      {
        _id: Date.now(),
        question: "",
        answer: "",
      },
    ]);
  };

  const areQuestionsUnchanged = (originalQuestions, newQuestions) => {
    return JSON.stringify(originalQuestions) === JSON.stringify(newQuestions);
  };

  const isAnyQuestionEmpty = (questions) => {
    return questions.some((q) => q.question === "" || q.answer === "");
  };

  const handleEdit = async () => {
    console.log("Editing FAQ...");
    // Implement your edit logic here (e.g., send updated data to the server)
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      <div className="space-y-8">
        {questions.map((q) => (
          <div key={q._id} className="border-t border-gray-200 pt-6">
            <div className="text-lg">
              <button
                className="flex items-start text-black justify-between w-full text-left focus:outline-none"
                onClick={() => toggleQuestion(q._id)}
              >
                <input
                  className="border-none"
                  value={q.question}
                  onChange={(e) => handleQuestionChange(q._id, e.target.value)}
                  placeholder="Add your question..."
                />
                <span className="ml-6 flex-shrink-0">
                  {q.active ? (
                    <FaMinus className="h-6 w-6" />
                  ) : (
                    <FaPlus className="h-6 w-6" />
                  )}
                </span>
              </button>
            </div>
            {q.active && (
              <div className="mt-2 pr-12">
                <input
                  className="border-none"
                  value={q.answer}
                  onChange={(e) => handleAnswerChange(q._id, e.target.value)}
                  placeholder="Add your answer..."
                />
                <span className="ml-6 flex-shrink-0">
                  <AiOutlineDelete
                    className="text-black text-lg cursor-pointer"
                    onClick={() => {
                      setQuestions((prevQuestions) =>
                        prevQuestions.filter((item) => item._id !== q._id)
                      );
                    }}
                  />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <IoMdAddCircleOutline
          className="text-black text-2xl cursor-pointer"
          onClick={newFaqHandler}
        />
      </div>
      <div className="w-32 h-12 mt-8">
        <button
          className={`w-full h-full text-white ${
            areQuestionsUnchanged(questions, [])
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 cursor-pointer"
          } rounded`}
          onClick={
            areQuestionsUnchanged(questions, []) ? () => null : handleEdit
          }
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditFaq;
