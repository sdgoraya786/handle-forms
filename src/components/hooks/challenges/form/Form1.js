import React, { useState } from "react";
import "./form.css";
/* #40 step by step - Handle form using react hooks */

const Form1 = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [newEntry, setNewEntry] = useState([]);

  const submitData = (e) => {
    e.preventDefault();
    // const newData = { name: name, mobile: mobile };
    const newData = { name, mobile }; /* Destructing object */
    setNewEntry([...newEntry, newData]);
    setName("");
    setMobile("");
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {newEntry.map((values) => {
          return (
            <>
              <h1>{values.name}</h1>
              <h1>{values.mobile}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Form1;
