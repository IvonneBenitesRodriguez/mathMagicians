import React, { useState } from 'react';
import './App.css';
import CalculatorButton from './components/Calculator';
import calculate from './logic/calculate';
import DisplayQuotes from './components/DisplayingQuotes';

function App() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonValue) => {
    const newState = calculate(calculatorState, buttonValue);
    setCalculatorState(newState);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          readOnly
          value={calculatorState.next || calculatorState.total || '0'}
        />
      </div>
      <div className="buttons">
        <CalculatorButton className="ac-button" value="AC" onClick={() => handleButtonClick('AC')} />
        <CalculatorButton value="+/-" onClick={() => handleButtonClick('+/-')} />
        <CalculatorButton value="%" onClick={() => handleButtonClick('%')} />
        <CalculatorButton className="orange" value="÷" onClick={() => handleButtonClick('÷')} />
        <CalculatorButton value="7" onClick={() => handleButtonClick('7')} />
        <CalculatorButton value="8" onClick={() => handleButtonClick('8')} />
        <CalculatorButton value="9" onClick={() => handleButtonClick('9')} />
        <CalculatorButton className="orange" value="x" onClick={() => handleButtonClick('x')} />
        <CalculatorButton value="4" onClick={() => handleButtonClick('4')} />
        <CalculatorButton value="5" onClick={() => handleButtonClick('5')} />
        <CalculatorButton value="6" onClick={() => handleButtonClick('6')} />
        <CalculatorButton className="orange" value="-" onClick={() => handleButtonClick('-')} />
        <CalculatorButton value="1" onClick={() => handleButtonClick('1')} />
        <CalculatorButton value="2" onClick={() => handleButtonClick('2')} />
        <CalculatorButton value="3" onClick={() => handleButtonClick('3')} />
        <CalculatorButton className="orange" value="+" onClick={() => handleButtonClick('+')} />
      </div>
      <div className="buttonsModified">
        <CalculatorButton value="0" className="specificButton" isSpecificButton onClick={() => handleButtonClick('0')} />
        <CalculatorButton className="dot" value="." onClick={() => handleButtonClick('.')} />
        <CalculatorButton className="equal orange" value="=" onClick={() => handleButtonClick('=')} />
      </div>

      <DisplayQuotes />

    </div>

  );
}

export default App;
