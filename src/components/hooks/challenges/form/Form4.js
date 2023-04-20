import React, { useState } from "react";
import "./form.css";
/* #42 step by step - Understanding React forms i  details  */

const Form4 = () => {
  const [newEntry, setNewEntry] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  // for id new Date().getTime().toString()

  const inputData = (e) => {
    e.preventDefault();
    // const name = e.target.name;
    // const value = e.target.value;
    const { value, name } = e.target;
    setNewEntry((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };

  //   const data = {
  //     name: "SD Goraya",
  //     color: "White",
  //   };
  //   console.log(data);
  //   const comData = {
  //     ...data,
  //     gender: "Male",
  //   };
  //   console.log(comData);

  return (
    <>
      <div className="container">
        <form>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="width margin padding"
              value={newEntry.name}
              onChange={inputData}
            />
          </div>
          <div>
            <input
              type="text"
              name="mobile"
              placeholder="Enter Number"
              className="width margin padding"
              value={newEntry.mobile}
              onChange={inputData}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="width margin padding"
              value={newEntry.email}
              onChange={inputData}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              className="width margin padding"
              value={newEntry.password}
              onChange={inputData}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>{newEntry.name}</h1>
        <h1>{newEntry.mobile}</h1>
        <h1>{newEntry.email}</h1>
        <h1>{newEntry.password}</h1>
      </div>
    </>
  );
};

export default Form4;
