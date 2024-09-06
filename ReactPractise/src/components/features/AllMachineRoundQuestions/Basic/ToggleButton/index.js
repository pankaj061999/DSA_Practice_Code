import React, { useState } from "react";

export const ToggleButton = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <div>
      <h1>Toggle Button</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", color: "#fff" }}>
        <button
          onClick={handleToggle}
          style={{
            padding: "10px 20px",
            backgroundColor: active ? "#4caf50" : "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {active ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
};
