import { useState, useEffect, useCallback } from "react";

const useCountDown = ({ initialMinutes = 1, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Function to start the timer
  const start = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  // Function to pause the timer
  const pause = useCallback(() => {
    setIsActive(false);
    setIsPaused(true);
  }, []);

  // Function to resume the timer
  const resume = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  useEffect(() => {
    let timer;
    if (isActive && !isPaused) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, isPaused, minutes, seconds]);

  return { minutes, seconds, start, pause, resume };
};

export default useCountDown;
