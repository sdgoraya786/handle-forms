import React, { useState } from "react";

// Thapa Technical #5 Three Dots { ... } & Handle Objects using UseState Hook
const UseStateObject = () => {
  const [data, setData] = useState({
    name: "SD Goraya",
    age: 24,
    degree: "BSCS",
  });
  const update = () => {
    setData({
      ...data,
      name: "MSD Goraya",
      degree: "MBBS",
    });
  };

  return (
    <div>
      <h1>
        Name: {data.name}, Age: {data.age}, Degree: {data.degree}
      </h1>
      <button onClick={update}>Update</button>
    </div>
  );
};

export default UseStateObject;
