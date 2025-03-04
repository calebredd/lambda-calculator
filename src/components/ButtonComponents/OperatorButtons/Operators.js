import React, { useState } from "react";
import {operators} from "../../../data";
//import any components needed

//Import your array data to from the provided data file
const Operators = () => {
  const [operatorsState, setOperatorsState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map((operator) => {
        return <button className="operatorBtn btn">{operator.char}</button>;
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;
