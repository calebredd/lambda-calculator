import React from "react";
import numbers from "../../../data";
//import any components needed

//Import your array data to from the provided data file
// const [numberState, setNumberState] = useState(numbers);
const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {numbers[0]}
      {/* {numbers.map((number)=>{
        return <button className={`${number}`} onClick(()=>{return this.props.number;})>{number}</button>
      })} */}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Numbers;