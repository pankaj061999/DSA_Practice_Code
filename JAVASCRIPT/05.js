// // What are the possible ways to create objects in JavaScript
// import React, { useState, useRef } from "react";

// export default function Stopwatch() {
//   const [running, setRunning] = useState(false);
//   const [elapsed, setElapsed] = useState(0);
//   const startTimeRef = useRef(0);

//   const startTimer = () => {
//     if (!running) {
//       setRunning(true);
//       startTimeRef.current = Date.now() - elapsed;
//       setInterval(() => {
//         setElapsed(Date.now() - startTimeRef.current);
//       }, 10);
//     }
//   };

//   const stopTimer = () => {
//     if (running) {
//       setRunning(false);
//       clearInterval();
//     }
//   };

//   const resetTimer = () => {
//     setRunning(false);
//     setElapsed(0);
//     clearInterval();
//   };

//   const formatTime = (time) => {
//     const pad = (n) => (n < 10 ? `0${n}` : n);
//     const minutes = Math.floor((time / 60000) % 60);
//     const seconds = Math.floor((time / 1000) % 60);
//     const milliseconds = Math.floor((time / 10) % 100);

//     return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
//   };

//   return (
//     <div>
//       <h1>{formatTime(elapsed)}</h1>
//       <button onClick={startTimer} disabled={running}>
//         Start
//       </button>
//       <button onClick={stopTimer} disabled={!running}>
//         Stop
//       </button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }
