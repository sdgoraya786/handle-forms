import React, { useState } from "react";
import "./form.css";

/* #41 step by step - Handling multiple input fields using React Hooks with basic validation. */

const Form2 = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEntry, setNewEntry] = useState([]);

  const submitData = (e) => {
    e.preventDefault();
    if (name && mobile && email && password) {
      // const newData = { name: name, mobile: mobile };
      const newData = {
        name,
        mobile,
        email,
        password,
      }; /* Destructing object */
      setNewEntry([...newEntry, newData]);
      setName("");
      setMobile("");
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill all the fileds.");
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={submitData}>
          <div>
            <input
              type="text"
              placeholder="Enter name"
              className="width margin padding"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Number"
              className="width margin padding"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Email"
              className="width margin padding"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Password"
              className="width margin padding"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {newEntry.map((values) => {
          return (
            <>
              <h1>{values.name}</h1>
              <h1>{values.mobile}</h1>
              <h1>{values.email}</h1>
              <h1>{values.password}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Form2;
