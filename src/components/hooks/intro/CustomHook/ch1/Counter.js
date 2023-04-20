import React, { useState } from "react";
import useTitleCount from "./useTitleCount";

// Thapa Technical #20 Custom Hook
const Counter = () => {
  const [count, setCount] = useState(0);

  // Custom Hook
  useTitleCount(count);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default Counter;
