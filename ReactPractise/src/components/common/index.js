import React, { memo, useCallback, useRef } from "react";

const CommonComponent = () => {
  const inputRef = useRef();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log("Print ref 1", inputRef.current.value);
    inputRef.current.style.color = "red";
  }, [])

  console.log("Pritn ref 2", inputRef);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={inputRef} />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default memo(CommonComponent);
