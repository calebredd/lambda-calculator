import React from "react";
import Numbers from "./Numbers";
const NumberButton = () => {
  return (
    <div className="numberButtons">
      <button className="numberBtn btn">1</button>
      <button className="numberBtn btn">2</button>
      <button className="numberBtn btn">3</button>
      <button className="numberBtn btn">4</button>
      <button className="numberBtn btn">5</button>
      <button className="numberBtn btn">6</button>
      <button className="numberBtn btn">7</button>
      <button className="numberBtn btn">8</button>
      <button className="numberBtn btn">9</button>
      <button className="numberBtn btn zero">0</button>
      <button className="numberBtn btn">.</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton;
