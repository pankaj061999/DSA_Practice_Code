const { useState, useCallback, useEffect } = require("react");

const useCountDownTime = ({ initalMin = 1, initalSec = 0 }) => {
  const [minutes, setMinutes] = useState(initalMin);
  const [seconds, setSeconds] = useState(initalSec);

  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const start = useCallback(() => {
    setIsActive(true);
    setIsPause(false);
  }, []);

  const pause = useCallback(() => {
    setIsActive(false);
    setIsPause(true);
  }, []);

  const resume = useCallback(() => {
    setIsActive(true);
    setIsPause(false);
  }, []);

  useEffect(() => {
    let timer;
    if (isActive & !isPause) {
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
  }, [isActive, isPause, minutes, seconds]);

  return { minutes, seconds, start, pause, resume };
};

export default useCountDownTime;
