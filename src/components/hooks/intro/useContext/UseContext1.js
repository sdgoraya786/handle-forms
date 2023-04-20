import React, { createContext } from "react";
import CompA from "./CompA";

// Thapa Technical #19 What is Prop Drilling, Context API & useContext Hook in React
export const BioData = createContext();
const UseContext1 = () => {
  return (
    <>
      {/* <h1>Hello Main Comp...</h1> */}
      <BioData.Provider value={"Shahzad Ashraf"}>
        <CompA />
      </BioData.Provider>
    </>
  );
};

export default UseContext1;
// export {BioData};
