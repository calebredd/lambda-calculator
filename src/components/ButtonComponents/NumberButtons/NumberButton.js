import React from "react";
import Numbers from "./Numbers";
const NumberButton = (first, setFirst) => {
  return (
    <div className="numberButtons">
      <Numbers
      first={first}
      setFirst={setFirst}
      />
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton;
