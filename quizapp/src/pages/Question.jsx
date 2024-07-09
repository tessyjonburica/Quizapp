import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Timer from "../components/Timer";

function Question() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showError, setShowError] = useState(false);
    const [key, setKey] = useState(0); // To reset the timer
    const [quizComplete, setQuizComplete] = useState(false);
    const navigate = useNavigate();

    const questions = [
        {
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'],
            correct: '4'
        },
        {
            question: 'What is 3 + 2?',
            options: ['3', '4', '5', '6'],
            correct: '5'
        },
        {
            question: 'What is 2 + 4?',
            options: ['3', '4', '5', '6'],
            correct: '6'
        },
        // Add more questions here
    ];

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
        const isCorrect = selectedOption === questions[currentQuestion].correct;

        if (isCorrect && !autoSubmit) {
            setScore(prevScore => {
                const newScore = prevScore + 1;
                if (currentQuestion === questions.length - 1) {
                    navigate('/results', { state: { score: newScore, totalQuestions: questions.length } });
                }
                return newScore;
            });
        } else {
            if (currentQuestion === questions.length - 1) {
                navigate('/results', { state: { score, totalQuestions: questions.length } });
            }
        }

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
                setIsSubmitted(false);
                setKey((prevKey) => prevKey + 1); // Reset the timer
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

    if (quizComplete) {
        return null; // Render nothing while navigating to results
    }

    return (
        <div className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <Header />
            <div className="mt-36 px-28 container border border-green-500 mx-auto flex justify-between">
                <div className="border border-pink-500 w-1/2">
                    <h2 className="text-xl">{`Question ${currentQuestion + 1} of ${questions.length}`}</h2>
                    <h3 className="text-lg mt-4">{questions[currentQuestion].question}</h3>
                    {/* <Timer key={key} duration={10} onComplete={handleTimeComplete} /> */}
                </div>
                <div className="pe-24 border border-yellow-500 w-1/2">
                    <div>
                        <ul className="mt-2">
                            {questions[currentQuestion].options.map((option, index) => (
                                <li
                                    key={index}
                                    className={`mt-3 mb-3 py-4 shadow-lg border rounded-lg ${selectedOption === option && !isSubmitted ? 'border-purple-500' : ''} ${isSubmitted ? (option === questions[currentQuestion].correct ? 'border-green-500' : (option === selectedOption ? 'border-red-500' : '')) : 'border-gray-300'} cursor-pointer`}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </li>
                            ))}
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
