import React, { useContext } from "react";
import { BioData } from "./UseContext1";

const CompB = () => {
  const name = useContext(BioData);
  return <h1>This is CompB - {name}</h1>;
};

export default CompB;
