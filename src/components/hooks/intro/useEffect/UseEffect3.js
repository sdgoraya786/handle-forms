import React, { useState, useEffect } from "react";

// Thapa Technical #13 React Hook useEffect CleanUp Function
const UseEffect3 = () => {
  const [widthCount, setWidthCount] = useState(window.innerWidth);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", actualWidth);
    // CleanUp Function
    return () => {
      console.log("remove event");
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div>
      <p>The actual size of window is:</p>
      <h1>{widthCount}</h1>
    </div>
  );
};

export default UseEffect3;
