import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChangeUserInput = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newValue }; // + is used for casting and enforce use newValue as a number
    });
  };
  return (
    <>
      <Header />
      <UserInput
        handleChangeUserInput={handleChangeUserInput}
        userInput={userInput}
      />
      {!inputIsValid && (
        <p className="center"> Please Enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
};

export default App;
