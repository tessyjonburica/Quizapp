import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [duration, onComplete]);

  const percentage = (timeLeft / duration) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Timer;
