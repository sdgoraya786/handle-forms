import React, { useReducer } from "react";

// Thapa Technical #18 useReducer Hook

const initilaState = 0;
const reducer = (state, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error();
  }
};
const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initilaState);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Inc</button>
      &nbsp;&nbsp;&nbsp;
      <button
        // {...(state === 0 ? { disabled: "disabled" } : {})}
        disabled={state === 0 ? "disabled" : ""}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Dec
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer1;
// Reducers are pure function that takes in a state and action
// and return a new state.
