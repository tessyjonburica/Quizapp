import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import data from "../../data.json";

function Welcome() {
  const topics = data.quizzes;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Header />
      <div className="mt-8 md:mt-32 px-4 md:px-28 container mx-auto flex flex-col md:flex-row justify-between md:justify-around items-center md:items-start">
        <div className="mb-8 md:mb-0 md:text-left">
          <h2 className="font-sans text-4xl md:text-4xl">
            Welcome to the <br /> <span className="font-bold">Frontend Quiz!</span>
          </h2>
          <p className="mt-4 text-gray-500">Pick a subject to get started</p>
        </div>
        <div className="w-full md:w-auto">
          <ul className=" p-4 md:p-0">
            {topics.map((topic) => (
              <li
                key={topic.title}
                className="py-4 md:pe-40 px-6 my-3 rounded-lg cursor-pointer shadow-lg dark:shadow-lg dark:bg-gray-800"
                onClick={() => {
                  window.location.href = `/question/${topic.title}`;
                }}
              >
                <span className="text-black dark:text-white  font-semibold">{topic.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
