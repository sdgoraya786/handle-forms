import React, { useState } from "react";

// Thapa Technical #6 Basic TODO List
const C2 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "SD Goraya",
      age: 24,
    },
    {
      id: 2,
      name: "Shahzad",
      age: 25,
    },
    {
      id: 3,
      name: "MSD Goraya",
      age: 20,
    },
  ]);

  const clear = () => {
    setData([]);
  };
  const remove = (id) => {
    const newArr = data.filter((val) => val.id !== id);
    setData(newArr);
  };
  return (
    <>
      {data.map((val) => (
        <h1 key={val.id}>
          Name: {val.name} & Age: {val.age}
          <button onClick={() => remove(val.id)}>Remove</button>
        </h1>
      ))}

      <button onClick={clear}>Clear</button>
    </>
  );
};

export default C2;
