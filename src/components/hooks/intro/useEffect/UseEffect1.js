import React, { useEffect, useState } from "react";

// Thapa Technical #10,11 useEffect Hook
const UseEffect = () => {
  const [count, setCount] = useState(0);

  /** we cannot use hooks in conditon = we use condition in hooks */
  /** Method 1 for use condition*/
  //   useEffect(() => {
  //     document.title = count > 0 ? `Chats (` + count + `)` : `Chats`;
  //   });
  /** Method 2 for use condition =11*/
  useEffect(() => {
    count > 0
      ? (document.title = `Chats (${count})`)
      : (document.title = `Chats`);
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default UseEffect;
