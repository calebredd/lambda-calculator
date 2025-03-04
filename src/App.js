import React, { useState } from "react";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";
import OperatorButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
import {add,subtract,multiply,divide, flip} from "./components/math"

import "./App.scss";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [number, setNumber] = useState(0);
  const[secondNumber, setSecondNumber]=useState(0);
  const[previous, setPrevious]=useState(0);
  const sum=add(number,secondNumber);
  const diff=subtract(number,secondNumber);
  const times=multiply(number,secondNumber);
  const div=divide(number,secondNumber);
  const opp=flip(number);
  const percent=multiply(number,100);
  const clear=()=>{return(setNumber(0), setSecondNumber(0))};


  return (
    <div className="container">
      <div className="App">
        <Logo />
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display 
        display={number}
        />
        <div className="buttons">
          <div className="leftColumn">
            <SpecialButton />
            <NumberButton 
            first={number}
            setFirst={setNumber}
            // secondNumber={secondNumber}
            // setSecondNumber={setSecondNumber}
            />
          </div>
          <div className="rightColumn">
            <OperatorButton
            number={number}
            setNumber={setNumber}
            secondNumber={secondNumber}
            setSecondNumber={setSecondNumber} 
            previous={previous}
            setPrevious={setPrevious}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
