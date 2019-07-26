import React from "react";
import Specials from "./Specials";
const SpecialButton = () => {
  return (
    <div className="specialButtons">
      <button className="specialBtn btn">C</button>
      <button className="specialBtn btn">X/-</button>
      <button className="specialBtn btn">%</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
    
  );
};
export default SpecialButton;