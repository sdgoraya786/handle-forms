import React from "react";
import { useTitleCount } from "./useTitleCount";

// Thapa Technical #20 Custom Hook (screenshot 740 in s-drive)
// const Counter = () => {
//   // Custom Hook //
//   const [counter, setCounter] = useTitleCount(0);
//   console.log(useTitleCount());
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={setCounter}>Click me</button>
//     </>
//   );
// };

// export default Counter;

const Counter = () => {
  // Custom Hook
  const [counter, setInc, setDec] = useTitleCount(0);

  // if counter equal to 0 then decrement button is disable
  let disabled;
  counter === 0 && (disabled = "disabled");
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={setInc}>Click for Inc</button>&nbsp;&nbsp;&nbsp;
      <button disabled={disabled} onClick={setDec}>
        Click for Dec
      </button>
    </>
  );
};

export default Counter;
