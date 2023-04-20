import React, { useRef, useState } from "react";

// Thapa Technical #16 Ref & useRef Hooks | Controlled and Uncontrolled Form Components
const UseRef16 = () => {
  // its like useState only and its preserve value . No Rerender
  const name = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const inputData = name.current.value;
    inputData === "" ? alert("Plz fill the field.") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" ref={name} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      {/* {show ? <p>Your Name is {name.current.value}</p> : ""} */}
      {show && <p>Your Name is {name.current.value}</p>}
    </div>
  );
};

export default UseRef16;
