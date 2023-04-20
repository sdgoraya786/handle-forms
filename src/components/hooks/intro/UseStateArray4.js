import React, { useState } from "react";

// Thapa Technical #4 work with Array using UseState Hook
const UseStateArray = () => {
  // constent ki valu ko change naii kr sakty
  var d = [
    {
      id: 0,
      name: "SD Goraya",
      age: 24,
    },
    {
      id: 1,
      name: "Shahzad",
      age: 25,
    },
    {
      id: 2,
      name: "MSD Goraya",
      age: 20,
    },
  ];
  // component ko rerender krne ke lie hum useSate ko use kren gen
  const [data, setData] = useState(d);

  const clear = () => {
    // d = [];  /**  we cannot directly ampty array like this in react use useState hook for rerender component */
    setData([]);
  };
  return (
    <>
      {data.map((val) => (
        <h1 key={val.id}>
          Name: {val.name} & Age: {val.age}
        </h1>
      ))}

      <button onClick={clear}>Clear</button>
    </>
  );
};

export default UseStateArray;
