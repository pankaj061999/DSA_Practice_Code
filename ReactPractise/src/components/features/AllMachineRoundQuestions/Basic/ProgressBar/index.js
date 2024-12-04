import React, { useEffect, useState } from "react";

export const ProgressBarComponent = () => {
  const [prgressValue, setProgressValue] = useState(0);

  const handleProgressBar = () => {
    setTimeout(() => {
      if (prgressValue < 100) {
        setProgressValue(prgressValue + 10);
      }
    }, 1000);
  };

  useEffect(() => {
    if (prgressValue < 100) handleProgressBar();
  }, [prgressValue]);

  console.log("Print prgressValue", prgressValue);

  return (
    <div>
      <h1>Progress Bar Component :</h1>

      <div
        style={{
          width: `${prgressValue * 2}px`,
          height: "20px",
          borderRadius: "10px",
          border: "2px solid green",
          background: "red",
        }}
      />
    </div>
  );
};
