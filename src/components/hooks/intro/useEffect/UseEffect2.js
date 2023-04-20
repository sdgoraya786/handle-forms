import React, { useEffect, useState } from "react";

// Thapa Technical #12 Understanding the useEffect Dependency List Array
const UseEffect2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am fine one");
    count > 0
      ? (document.title = `Chats (${count})`)
      : (document.title = `Chats`);
  }, [count]);

  useEffect(() => {
    console.log("I am fine");
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default UseEffect2;
