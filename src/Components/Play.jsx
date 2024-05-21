import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data";
var arr = ['A', 'B', 'C', 'D'];

export default function Play() {
    const [quizStart, setQuiz] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const navigate = useNavigate();

    function again() {
        setQuiz(true);
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setIsCorrect(null);
    }

    useEffect(() => {
        console.log(score);
    }, [score]);

    const handleAnswerOptionClick = (index) => {
        const correctAnswerIndex = questions[currentQuestion].answer - 1;
        const isAnswerCorrect = (index === correctAnswerIndex);

        setSelectedOption(index);
        setIsCorrect(isAnswerCorrect);

        if (isAnswerCorrect) {
            setScore(score + 10);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                setQuiz(false);
            }
        }, 1000); // Delay to show the correct/incorrect state
    };

    return (
        quizStart ? (
            <div className="container">
                <div className="nav">
                    <div>
                        <h3>Question</h3>
                        <h2>{currentQuestion + 1}/{questions.length}</h2>
                    </div>

                    <div>
                        <h3>Score</h3>
                        <h2>{score}</h2>
                    </div>
                </div>

                <div className="quiz">
                    <div className="question-section">
                        <h2 className="question-text">{questions[currentQuestion].question}</h2>
                    </div>
                    <div className="answer-section">
                        {Object.values(questions[currentQuestion]).slice(1, 5).map((option, index) => (
                            <div className="o-container" key={index}>
                                <h2>{arr[index]}</h2>
                                <button
                                    className="option"
                                    onClick={() => handleAnswerOptionClick(index)}
                                    style={{
                                        backgroundColor:
                                            selectedOption === index
                                                ? isCorrect
                                                    ? 'green'
                                                    : 'red'
                                                : (selectedOption !== null && index === questions[currentQuestion].answer - 1)
                                                    ? 'green'
                                                    : ''
                                    }}
                                >
                                    {option}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <div className="over">
                <div>
                    <h1>{score}</h1>
                </div>

                <button className="a-btn" onClick={again}>Play Again</button>
                <button className="a-btn" onClick={() => navigate('/')}>Go to Home</button>
            </div>
        )
    );
}