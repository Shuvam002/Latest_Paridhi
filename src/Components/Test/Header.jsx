import React, { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [inputs, setInputs] = useState([]);
  const maxInputs = 5;

  const addInput = () => {
    if (inputs.length < maxInputs) {
      const inputValue = prompt("Enter a number:");
      setInputs((prevInputs) => [...prevInputs, inputValue]);
      console.log(inputValue);
    }
  };

  console.log("this is the last one :: ", inputs.length, inputs);
  return (
    <>
      <input style={{ margin: "600px" }} type="text" onChange={addInput} />
    </>
  );
};

export default HomePage;
