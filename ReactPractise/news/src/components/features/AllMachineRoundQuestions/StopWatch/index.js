import React from "react";
import useCountDownTime from "./useTimeCOuntdown";

export const CreateStopWatch = () => {
  const { minutes, seconds, start, pause, resume } = useCountDownTime({
    initalMin: 5,
    initalSec: 0,
  });

  return (
    <div>
      <h1>StopWatch:</h1>
      <div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
        </div>
        <div>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
      </div>
    </div>
  );
};
