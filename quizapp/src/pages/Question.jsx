import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Timer from "../components/Timer";
import data from '../../data.json';

function Question() {
    const { topic } = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showError, setShowError] = useState(false);
    const [key, setKey] = useState(0); // To reset the timer
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        const selectedTopic = data.quizzes.find(item => item.title === topic);
        if (selectedTopic) {
            setCurrentQuestion(0); // Reset current question index
            setSelectedOption(null); // Reset selected option
            setScore(0); // Reset score
            setShowError(false); // Reset error state
            setKey(0); // Reset timer key
        } else {
            navigate('/');
        }
    }, [topic, navigate]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowError(false);
    };

    const handleSubmit = (autoSubmit = false) => {
        if (selectedOption === null && !autoSubmit) {
            setShowError(true);
            return;
        }

        setIsSubmitted(true);
        const isCorrect = selectedOption === questions[currentQuestion]?.answer;

        if (isCorrect && !autoSubmit) {
            setScore(prevScore => {
                const newScore = prevScore + 1;
                if (currentQuestion === questions.length - 1) {
                    navigate("/results", {
                        state: {
                            topic,
                            score: newScore,
                            totalQuestions: questions.length,
                        },
                    });
                }
                return newScore;
            });
        } else {
            if (currentQuestion === questions.length - 1) {
                navigate('/results', {
                    state: {
                        topic,
                        score,
                        totalQuestions: questions.length,
                    },
                });
            }
        }

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
                setIsSubmitted(false);
                setKey(prevKey => prevKey + 1); // Reset the timer
            }
        }, 1000);
    };

    const handleTimeComplete = () => {
        if (!isSubmitted) {
            setShowError(false);
            setSelectedOption(null);
            handleSubmit(true);
        }
    };

    const handlePlayAgain = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setIsSubmitted(false);
        setScore(0);
        setShowError(false);
        setKey(0);
        setQuizComplete(false);
    };

    const selectedTopic = data.quizzes.find(item => item.title === topic);
    const questions = selectedTopic ? selectedTopic.questions : [];
    const optionLabels = ['A', 'B', 'C', 'D'];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <Header topic={topic} />
            <div className="mt-16 px-4 md:px-28 container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0 md:pe-16 w-full md:w-1/2 p-4 md:p-0">
                    <h2 className="text-base italic text-neutral-500 dark:text-neutral-400">{`Question ${currentQuestion + 1} of ${questions.length}`}</h2>
                    <h3 className="text-lg mt-6 mb-16 md:mb-48 font-bold leading-normal text-gray-600 dark:text-white">{questions[currentQuestion]?.question}</h3>
                    <Timer key={key} duration={10} onComplete={handleTimeComplete} />
                </div>

                <div className="w-full md:w-1/2 pe-0 md:pe-24 p-4 md:p-0">
                    <div>
                        <ul className="mt-2">
                            {questions[currentQuestion]?.options.map((option, index) => {
                                const isSelected = selectedOption === option;
                                const isCorrect = isSubmitted && option === questions[currentQuestion]?.answer;
                                const isIncorrect = isSubmitted && option === selectedOption && option !== questions[currentQuestion]?.answer;

                                let optionClass = "relative mt-3 mb-3 py-3 shadow-lg border rounded-lg cursor-pointer flex items-center";
                                if (isSelected && !isSubmitted) {
                                    optionClass += " border-purple-500 border-2";
                                } else if (isCorrect) {
                                    optionClass += " border-green-500 border-2";
                                } else if (isIncorrect) {
                                    optionClass += " border-red-500 border-2";
                                } else {
                                    optionClass += " border-gray-300 border-2";
                                }

                                let labelClass = "px-3 py-1 rounded-lg mx-2";
                                if (isSelected && !isSubmitted) {
                                    labelClass += " bg-purple-500";
                                } else if (isCorrect) {
                                    labelClass += " bg-green-500";
                                } else if (isIncorrect) {
                                    labelClass += " bg-red-500";
                                } else {
                                    labelClass += " bg-gray-300";
                                }

                                return (
                                    <li
                                        key={index}
                                        className={optionClass}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        <div className={labelClass}>
                                            {optionLabels[index]}
                                        </div>
                                        <span className={`flex-1 ${isSelected && !isSubmitted ? 'text-purple-500' : ''} ${isCorrect ? 'text-green-500' : ''} ${isIncorrect ? 'text-red-500' : ''}`}>{option}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {showError && <p className="mt-2 text-red-500">Please select an option!</p>}
                    <div className="mt-4">
                        <button onClick={() => handleSubmit(false)} className="bg-purple-500 text-white px-4 py-4 rounded-2xl w-full">Submit Answer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;
