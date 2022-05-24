import { FC, useState } from "react";
import { Container } from "react-bootstrap";
import "../style/calculator.css";

const Calculator: FC = () => {
  const [result, setResult] = useState("");
  const handleChange = (event: any) => {
    setResult(result.concat(event.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const back = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    if (!result) {
      return;
    }
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div>
      <h2 className="calculator-title">Calculator</h2>
      <div className="form-container">
        <form>
          <input type="text" defaultValue={result}></input>
        </form>
        <div className="keypad">
          <button onClick={clear} className="clear">
            Clear
          </button>
          <button onClick={back} className="back">
            C
          </button>
          <button name="/" onClick={handleChange}>
            &divide;
          </button>
          <button name="7" onClick={handleChange}>
            7
          </button>
          <button name="8" onClick={handleChange}>
            8
          </button>
          <button name="9" onClick={handleChange}>
            9
          </button>
          <button name="*" onClick={handleChange}>
            &times;
          </button>
          <button name="4" onClick={handleChange}>
            4
          </button>
          <button name="5" onClick={handleChange}>
            5
          </button>
          <button name="6" onClick={handleChange}>
            6
          </button>
          <button name="-" onClick={handleChange}>
            -
          </button>
          <button name="1" onClick={handleChange}>
            1
          </button>
          <button name="2" onClick={handleChange}>
            2
          </button>
          <button name="3" onClick={handleChange}>
            3
          </button>
          <button name="+" onClick={handleChange}>
            +
          </button>
          <button name="0" onClick={handleChange}>
            0
          </button>
          <button name="." onClick={handleChange}>
            .
          </button>
          <button onClick={calculate} className="calculate">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
