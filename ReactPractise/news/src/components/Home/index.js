import React, { memo, useCallback, useEffect, useState } from "react";

// pure component
const CountComponent = memo(({ count }) => {
  console.log("CountComponent render");
  return <h1>Count number: {count}</h1>;
});

export const HomeComponent = () => {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleReduce = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  });

  const getSpachexdata = async () => {
    try {
      const result = await fetch(`https://api.spacexdata.com/v5/launches/latest`);

      const data = await result.json();

      console.log("Print data  final==========>>", data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSpachexdata();
  }, []);
  return (
    <div>
      <button onClick={() => handleCount()}>Submit {"   "}</button>
      <button onClick={() => handleReduce()}>Reduce</button>

      <CountComponent count={count} />
    </div>
  );
};
