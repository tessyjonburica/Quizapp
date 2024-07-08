import { useState } from "react";
import Header from "../components/Header";
import Timer from "../components/Timer";

function Question() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [key, setKey] = useState(0); // To reset the timer
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

    const handleTimeComplete = () => {
        // Move to the next question or show results
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setKey((prevKey) => prevKey + 1); // Reset the timer
        } else {
            alert('Quiz complete!');
        }
    };
    return (
        <>
            <div className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
                <Header />
                <div className="mt-20 container border border-green-500 mx-auto flex justify-between">

                    <div>
                        <div className="mt-4">
                            <h2 className="text-xl">{questions[currentQuestion].question}</h2>
                            <ul className="mt-2">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <li key={index} className="mt-1">
                                        {option}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <Timer key={key} duration={10} onComplete={handleTimeComplete} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="border border-pink-400 ">
                            {/* {topic.map(item => (
                                <li className="border border-yellow-500 py-4 pe-40 ps-6 my-3 rounded-lg" key={item.id}>{item.topic}</li>
                            ))} */}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Question;