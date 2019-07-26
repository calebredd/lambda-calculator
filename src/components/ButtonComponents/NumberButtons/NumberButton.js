import React from "react";
import Numbers from "./Numbers";
const NumberButton = () => {
  return (
    <div className="numberButtons">
      <Numbers/>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton;
