import React from "react";

// Thapa Technical #7 Short Circuit Evaluation with React | Logical && and || Operators
const ShortCircuitEvaluation = () => {
  return (
    <div>
      <h1>{"SD Goraya" || "MSD Goraya"}</h1>
      <h1>{"Shahzad Ashraf" && "MSD Goraya"}</h1>
    </div>
  );
};

export default ShortCircuitEvaluation;
