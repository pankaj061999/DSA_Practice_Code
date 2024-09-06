import React, { memo } from "react";

export const AboutComponent = memo(({ data, handleUpdateName, setName }) => {
  console.log("hiiiiii");
  return (
    <>
      <div>About {data}</div>

      <button onClick={() => setName("hey Jug")}>Update Name</button>
    </>
  );
});
