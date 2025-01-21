import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchQuestionsByCategory } from "../api";
import "../style/question.css";

function Question() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    const loadQuestions = () => {
      const fetchedQuestions = fetchQuestionsByCategory(category);
      setQuestions(fetchedQuestions);
    };

    loadQuestions();
  }, [category]);

  const handleOptionClick = (option) => {
    if (selectedOption !== null) return;

    const currentQuestion = questions[currentQuestionIndex];
    setSelectedOption(option);
    setCorrectAnswer(currentQuestion.correctAnswer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setCorrectAnswer(null);
    } else {
      alert("Bu kategori için tüm soruları tamamladınız!");
    }
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  if (questions.length === 0) {
    return <p>Bu kategoride soru bulunamadı.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div>
      <div className="bslik">
        <h2>{category} Kategorisindeki Sorular</h2>
      </div>
      <div className="question-container">
        <p className="question-text">{currentQuestion.questionText}</p>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "";
            let icon = null;

            if (selectedOption !== null) {
              if (option === correctAnswer) {
                buttonClass = "correct";
                icon = <span className="icon correct-icon">✔️</span>;
              }
              if (option === selectedOption && option !== correctAnswer) {
                buttonClass = "incorrect";
                icon = <span className="icon incorrect-icon">❌</span>;
              }
            }

            return (
              <button
                key={index}
                className={`option-button ${buttonClass}`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
              >
                {option}
                {icon}
              </button>
            );
          })}
        </div>
        <div className="button-container">
          {isLastQuestion ? (
            <button onClick={handleNavigateHome} className="home-button">
              Kategorilere dön
            </button>
          ) : (
            <button onClick={handleNextQuestion} className="next-button">
              Sonraki Soru
            </button>
          )}
        </div>
      </div>
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`sticker sticker${i + 1}`}></div>
      ))}
    </div>
  );
}

export default Question;
