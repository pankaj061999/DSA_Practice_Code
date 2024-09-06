import React, { useState, useEffect } from "react";

export default function BoxColourChange() {
  const len = 10;
  const initialColors = new Array(len).fill("#fff");

  const [list, setList] = useState(initialColors);
  const [boxColorID, setBoxColorID] = useState(null);

  const handleChangeColor = (boxID) => {
    setBoxColorID(boxID);
    setList((prevList) => prevList.map((color, index) => (index === boxID ? "red" : color)));
  };

  useEffect(() => {
    if (boxColorID === null) return;

    const timer = setTimeout(() => {
      const resetColors = [...list];
      let i = 0;
      const interval = setInterval(() => {
        if (i < resetColors.length) {
          resetColors[i] = "#fff";
          setList([...resetColors]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Change color every 100 milliseconds
    }, 1000); // Start after 1 second

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [boxColorID, list]);

  return (
    <div className="App">
      <h1>Change Box Color</h1>
      <div
        style={{
          borderRadius: "50%",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {list.map((color, index) => (
          <button
            key={index}
            style={{
              width: "30px",
              height: "30px",
              border: "1px solid red",
              cursor: "pointer",
              background: color,
            }}
            onClick={() => handleChangeColor(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
