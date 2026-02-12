import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12,
  });

  const inputIsValid = investmentInput.duration > 0;

  const handleInputChange = (event, key) => {
    setInvestmentInput((prev) => {
      const updatedInvestmentInput = {
        ...prev,
        [key]: +event.target.value,
      };
      return updatedInvestmentInput;
    });
  };



  return (
    <>
      <UserInput
        investmentInput={investmentInput}
        handleInputChange={handleInputChange}
      />
      {inputIsValid && <Results investmentInput={investmentInput}/>}
      {!inputIsValid && <p className="center">Please enter duration greater than zero.</p>}
    </>
  );
}

export default App;
