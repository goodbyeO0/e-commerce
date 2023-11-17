"use client";

import { useState, useEffect } from "react";

const Timer = () => {
  const oneMinute = 60; // in seconds
  const [timeRemaining, setTimeRemaining] = useState(oneMinute);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timeRemaining]);

  return (
    <div>
      <p>{timeRemaining}s</p>
    </div>
  );
};

export default Timer;
