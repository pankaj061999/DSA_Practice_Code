import React, { useRef } from "react";

export const CommonComponent = () => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Print ref", inputRef.current.value);
    inputRef.current.style.color = "red";
  };

  console.log("Pritn ref", inputRef);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={inputRef} />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
