import useCountDown from "@/hooks/TimerCOuntDown";
import { Newcontext } from "@/pages";
import React, { memo, useContext, useEffect, useRef } from "react";

const Contact = () => {
  const contextValue = useContext(Newcontext);
  const newref = useRef();
  //   console.log("Print console ===>>", newref);

  const { minutes, seconds, start, pause, resume } = useCountDown({
    initialMinutes: 5,
    initialSeconds: 0,
  });

  console.log("Print min and secpnd", minutes, seconds);

  useEffect(() => {
    return () => {
      console.log("Print when unmonting");
    };
  }, []);

  const styles = {
    timer: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
      margin: "20px 0",
    },
  };

  return (
    <div>
      <Newcontext.Consumer>
        {(item) => {
          return <>My Name is {item?.name}</>;
        }}
      </Newcontext.Consumer>
      <h1>Hey This is Contact us page</h1>
      <input type="text" onChange={() => console.log("Print here", newref?.current)} ref={newref} />
      <div style={styles.timer}>
        <h2>Countdown Timer</h2>
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

export default memo(Contact);
