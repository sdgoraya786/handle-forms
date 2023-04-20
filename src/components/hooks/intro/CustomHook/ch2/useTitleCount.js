import { useState, useEffect } from "react";

export const useTitleCount = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    count > 0
      ? (document.title = `Chats (${count})`)
      : (document.title = `Chats`);
  }, [count]);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return [count, handleInc, handleDec];
};
