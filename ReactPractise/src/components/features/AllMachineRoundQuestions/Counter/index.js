import React, { useState } from "react";

export const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncress = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecress = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1> Counter Project</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <button
          onClick={() => handleIncress()}
          style={{
            width: "100px",
            height: "30px",
            border: "2px solid #fff",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          +{" "}
        </button>
        <h1
          style={{
            width: "100px",
            height: "60px",
            border: "2px solid #fff",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          {count}
        </h1>
        <button
          onClick={() => handleDecress()}
          style={{
            width: "100px",
            height: "30px",
            border: "2px solid #fff",
            borderRadius: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
