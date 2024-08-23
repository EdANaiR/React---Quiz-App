import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/question.css';

const Question = () => {
    const { category } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null); // Seçilen seçeneği tutar
    const [correctAnswer, setCorrectAnswer] = useState(null);  // Doğru cevabı tutar

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const encodedCategory = encodeURIComponent(category);
                const response = await axios.get(`http://localhost:5230/api/quiz/category/${encodedCategory}`);
                setQuestions(response.data);
            } catch (error) {
                console.error('API Error:', error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [category]);

    const handleOptionClick = (option) => {
        if (selectedOption !== null) return;

        const currentQuestion = questions[currentQuestionIndex];
        setSelectedOption(option); // Seçilen seçeneği kaydeder
        setCorrectAnswer(currentQuestion.correctAnswer); // Doğru cevabı kaydeder
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null);
            setCorrectAnswer(null);
        } else {
            alert('Bu kategori için tüm soruları tamamladınız!');
        }
    };

    if (loading) {
        return <p className="loading">Yükleniyor...</p>;
    }

    if (questions.length === 0) {
        return <p>Bu kategoride soru bulunamadı.</p>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const { options } = currentQuestion;

    return (
        <div>
            <div className="bslik">
                <h2>{category} Kategorisindeki Sorular</h2>
            </div>
            <div className="question-container">
                <p className="question-text">{currentQuestion.questionText}</p>
                <div className="options-container">
                    {options.map((option, index) => {
                        let buttonClass = '';
                        let icon = null;

                        if (selectedOption !== null) {
                            if (option === correctAnswer) {

                                buttonClass = 'correct';
                                icon = <span className="icon correct-icon">✔️</span>;
                            }
                            if (option === selectedOption && option !== correctAnswer) {

                                buttonClass = 'incorrect';
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
                <button onClick={handleNextQuestion} className="next-button">
                    Sonraki Soru
                </button>
            </div>

            <div className="sticker sticker1"></div>
            <div className="sticker sticker2"></div>
            <div className="sticker sticker3"></div>
            <div className="sticker sticker4"></div>
            <div className="sticker sticker5"></div>
            <div className="sticker sticker6"></div>
            <div className="sticker sticker7"></div>
            <div className="sticker sticker8"></div>
            <div className="sticker sticker9"></div>
            <div className="sticker sticker10"></div>
            <div className="sticker sticker11"></div>
            <div className="sticker sticker12"></div>
        </div>
    );
};

export default Question;
