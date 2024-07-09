import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

function Results() {
    const location = useLocation();
    const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <Header />
            <div className="mt-8 px-4 md:px-28 container mx-auto flex flex-col md:flex-row justify-between">
                <div className="md:border border-violet-300 mb-6 md:mb-0 p-4 md:p-0">
                    <h2 className="text-3xl md:text-6xl text-gray-800 dark:text-white">Quiz Completed</h2>
                    <p className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">You scored...</p>
                </div>
                <div>
                    <div className="bg-white dark:bg-gray-800 px-4 md:px-40 py-10 md:py-16 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-full">
                        <div className="text-center">
                            <div className='mb-7'>
                                <p>Accessibility</p>
                            </div>
                            <div className="mb-5">
                                <p className='text-6xl md:text-8xl font-bold mb-10 text-gray-800 dark:text-white'>{score}</p>
                                <p className='text-gray-500 mt-4 dark:text-white'>out of {totalQuestions}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link to="/">
                            <button className="bg-purple-500 text-white px-4 py-4 w-full rounded-lg">Play Again</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;
