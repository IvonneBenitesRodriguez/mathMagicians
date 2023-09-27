import './App.css';
import CalculatorButton from './components/Calculator';

function App() {
  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          readOnly
          value="0"
        />
      </div>
      <div className="buttons">
        <CalculatorButton className="ac-button" value="AC" />
        <CalculatorButton value="+/-" />
        <CalculatorButton value="%" />
        <CalculatorButton className="orange" value="÷" />
        <CalculatorButton value="7" />
        <CalculatorButton value="8" />
        <CalculatorButton value="9" />
        <CalculatorButton className="orange" value="x" />
        <CalculatorButton value="4" />
        <CalculatorButton value="5" />
        <CalculatorButton value="6" />
        <CalculatorButton className="orange" value="-" />
        <CalculatorButton value="1" />
        <CalculatorButton value="2" />
        <CalculatorButton value="3" />
        <CalculatorButton className="orange" value="+" />
      </div>
      <div className="buttonsModified">
        <CalculatorButton value="0" className="specificButton" isSpecificButton />
        <CalculatorButton className="dot" value="." />
        <CalculatorButton className="equal orange" value="=" />
      </div>
    </div>
  );
}

export default App;
