import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [theme, setTheme] = useState("light");
  const [history, setHistory] = useState([]);
  const [expression, setExpression] = useState("");

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNumberClick = (number) => {
    setExpression((prevExpression) => prevExpression + number);
  };

  const handleOperatorClick = (operator) => {
    setExpression((prevExpression) => prevExpression + operator);
  };

  const handleClearClick = () => {
    setExpression("");
  };

  const handleCalculateClick = () => {
    try {
      const result = eval(expression);
      setHistory([...history, { expression, result }]);
      setExpression(String(result));
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleThemeToggle}
          />
          <span className="slider round"></span>
        </label>
        <span className="theme-label">
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </span>
      </div>
      <div className="history">
        <h2>History:</h2>
        <ul>
          {history.map((calculation, index) => (
            <li key={index}>
              {calculation.expression} = {calculation.result}
            </li>
          ))}
        </ul>
      </div>
      <div className="display">{expression}</div>
      <div className="buttons">
        <button onClick={handleClearClick}>C</button>
        <button onClick={()=> handleNumberClick("%")}>%</button>
        <button onClick={() => handleOperatorClick("/")}>÷</button>
        <button className="clear" onClick={handleClearClick}>⌫</button>

        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("*")}>x</button>

        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>

        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>

        <button onClick={() => handleNumberClick("00")}>00</button>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={() => handleOperatorClick(".")}>.</button>
        <button className="equal" onClick={handleCalculateClick} style={{ backgroundColor: "#80ced6", color: "white" }}>=</button>
      </div>
    </div>
  );
};

export default Calculator;