import React from "react";
import Operators from "./Operators";
const OperatorButton = () => {
  return (
      <div className="operatorButtons">
        <button className="operatorBtn btn">/</button>
        <button className="operatorBtn btn">X</button>
        <button className="operatorBtn btn">-</button>
        <button className="operatorBtn btn">+</button>
        <button className="operatorBtn btn">=</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      </div>
  );
};
export default OperatorButton;