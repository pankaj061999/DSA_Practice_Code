import { useState } from "react";

export default function ProgressComponent() {
  const [progress, setProgress] = useState(0);

  const startProgress = () => {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        setProgress(width);
      }
    }, 100);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Progress Bar Example</h1>
      <div
        style={{
          width: "100%",
          backgroundColor: "#f3f3f3",
          borderRadius: "25px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "30px",
            backgroundColor: "#4caf50",
            borderRadius: "25px",
            textAlign: "center",
            lineHeight: "30px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {progress}%
        </div>
      </div>
      <button onClick={startProgress} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Start Progress
      </button>
    </div>
  );
}
