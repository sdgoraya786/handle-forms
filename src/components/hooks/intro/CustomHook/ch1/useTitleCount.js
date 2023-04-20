import { useEffect } from "react";

const useTitleCount = (count) => {
  useEffect(() => {
    count > 0
      ? (document.title = `Chats (${count})`)
      : (document.title = `Chats`);
  }, [count]);
};

export default useTitleCount;
