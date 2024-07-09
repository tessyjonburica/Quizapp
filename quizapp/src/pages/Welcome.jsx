import Header from "../components/Header";

function Welcome() {
    const topic = [
        { id: '1', topic: 'HTML' },
        { id: '2', topic: 'CSS' },
        { id: '3', topic: 'JavaScript' },
        { id: '4', topic: 'Accesibility' }
    ]
    return (
        <>
            <div className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
                <Header />
                <div className="mt-20 container border border-green-500 mx-auto flex justify-between">

                    <div>
                        <h2 className="font-sans text-5xl">Welcome to the <br /> <span className="font-bold">Frontend Quiz!</span> </h2>
                        <p className="mt-4 text-gray-500">Pick a subject to get started</p>
                    </div>
                    <div>
                        <ul className="border border-pink-400 ">
                            {topic.map(item => (
                                <li className="border border-yellow-500 py-4 pe-40 ps-6 my-3 rounded-lg" key={item.id}>{item.topic}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;