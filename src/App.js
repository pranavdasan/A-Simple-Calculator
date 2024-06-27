import React, { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const [inputNum, setInputNum] = useState("");

  // Only rounds if rounding is needed
  function handleRound(num) {
    return num % 1 === 0 ? num : num.toFixed(5);
  }

  function add() {
    if (inputNum === '') return; // Check if inputNum is empty

    let newTotal = handleRound(total + parseFloat(inputNum));
    setTotal(newTotal);
    setInputNum('');
  };

  function subtract() {
    if (inputNum === '') return; // Check if inputNum is empty

    let newTotal = handleRound(total - parseFloat(inputNum));
    setTotal(newTotal);
    setInputNum('');
  };

  function multiply() {
    if (inputNum === '') return; // Check if inputNum is empty
    let newTotal = handleRound(total * parseFloat(inputNum));
    setTotal(newTotal);
    setInputNum('');
  };

  function divide() {
    if (inputNum === '') return; // Check if inputNum is empty
    let newTotal = handleRound(total / parseFloat(inputNum));
    setTotal(newTotal);
    setInputNum('');
  };

  function resetInput() {
    setInputNum('');
  };

  function resetResult() {
    setTotal(0);
    setInputNum('');
  };

  return (
    <div className="calculator">
      <h1>Simplest Working Calculator</h1>
      <div className="display">
        <input
          type="text"
          value={inputNum}
          onChange={(e) =>
            // Only set inputNum if the input has only digits
            /^\d*$/.test(e.target.value) ? setInputNum(e.target.value) : null
          }
        />
        <p className="total_display"> = {total}</p>
      </div>

      <div className="calculator-buttons">
        <button onClick={() => setInputNum(inputNum + '1')}>1</button>
        <button onClick={() => setInputNum(inputNum + '2')}>2</button>
        <button onClick={() => setInputNum(inputNum + '3')}>3</button>
        <button className="operator_button" onClick={add}>+</button>
        <button onClick={() => setInputNum(inputNum + '4')}>4</button>
        <button onClick={() => setInputNum(inputNum + '5')}>5</button>
        <button onClick={() => setInputNum(inputNum + '6')}>6</button>
        <button className="operator_button" onClick={subtract}>-</button>
        <button onClick={() => setInputNum(inputNum + '7')}>7</button>
        <button onClick={() => setInputNum(inputNum + '8')}>8</button>
        <button onClick={() => setInputNum(inputNum + '9')}>9</button>
        <button className="operator_button" onClick={multiply}>*</button>
        <button className="clear_button" onClick={resetInput}>C</button>
        <button onClick={() => setInputNum(inputNum + '0')}>0</button>
        <button className="clear_button" onClick={resetResult}>CE</button>
        <button className="operator_button" onClick={divide}>/</button>
      </div>
    </div>
  );
}

export default App;
