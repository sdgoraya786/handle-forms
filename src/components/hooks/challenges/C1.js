import React, { useState } from "react";
// Thapa Technical #1,2 Toggle the Data onClick using Hook
const C1 = () => {
  const [name, setName] = useState("Shahzad Ashraf");
  const changeName = () => {
    name === "Shahzad Ashraf"
      ? setName("SD Goraya")
      : setName("Shahzad Ashraf");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button className="btn" onClick={changeName}>
        Click me
      </button>
    </div>
  );
};

export default C1;
