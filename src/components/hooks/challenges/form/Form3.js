import React, { useState } from "react";
import "./form.css";
/* #42 step by step - Understanding React forms i  details  */

const Form3 = () => {
  const [newEntry, setNewEntry] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const inputData = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setNewEntry((previousData) => {
      if (name === "name") {
        return {
          name: value,
          mobile: previousData.mobile,
          email: previousData.email,
          password: previousData.password,
        };
      } else if (name === "mobile") {
        return {
          name: previousData.name,
          mobile: value,
          email: previousData.email,
          password: previousData.password,
        };
      } else if (name === "email") {
        return {
          name: previousData.name,
          mobile: previousData.mobile,
          email: value,
          password: previousData.password,
        };
      } else if (name === "password") {
        return {
          name: previousData.name,
          mobile: previousData.mobile,
          email: previousData.email,
          password: value,
        };
      }
    });
  };

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

export default Form3;
