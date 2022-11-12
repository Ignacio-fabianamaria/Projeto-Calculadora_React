import React, { useState } from "react";
import './calculator.css'

export default function Calcultor() {
  const [result, setResult] = useState(0);

  const handleChangeEnterDigit = ({ target: { value } }) => {
    result === 0 ? setResult(value) : setResult(result + value);
  }

  const handleChangeClear = () => {
    setResult(0)
  }

  const handleChangeBack = () => {
    result.length > 0 ? setResult(result.length - 1) : setResult(0)
  }

  const handleChangepercentage = () => {
    setResult(result / 100);
  }

  const handleChangePositiveNegative = () => {
    result > 0 ? setResult(-result) : setResult(Math.abs(result))
  }

  const handleChangeLogicalOperators = () => {

  }

  const generateResult = () => {

  }

  return (
    <section className="calculator">
      <div className="result-screen">
        <h1 className="result">{result}</h1>
      </div>
      <div className="container-digits">
        <button type="button" className="grey" onClick={handleChangeClear}>AC</button>
        <button type="button" className="digits" value={7} onClick={handleChangeEnterDigit}>7</button>
        <button type="button" className="digits" value={4} onClick={handleChangeEnterDigit}>4</button>
        <button type="button" className="digits" value={1} onClick={handleChangeEnterDigit}>1</button>
        <button type="button" className="digits" value={0} onClick={handleChangeEnterDigit}>0</button>
        <button type="button" className="grey" onClick={handleChangePositiveNegative}>+/-</button>
        <button type="button" className="digits" value={8} onClick={handleChangeEnterDigit}>8</button>
        <button type="button" className="digits" value={5} onClick={handleChangeEnterDigit} >5</button>
        <button type="button" className="digits" value={2} onClick={handleChangeEnterDigit}>2</button>
        <button type="button" className="digits" value={'.'} onClick={handleChangeEnterDigit}>.</button>
        <button type="button" className="grey" onClick={handleChangepercentage}>%</button>
        <button type="button" className="digits" value={9} onClick={handleChangeEnterDigit}>9</button>
        <button type="button" className="digits" value={6} onClick={handleChangeEnterDigit}>6</button>
        <button type="button" className="digits" value={3} onClick={handleChangeEnterDigit}>3</button>
        <button type="button" className="digits" onClick={handleChangeBack} >&lArr;</button>
        <button type="button" className="orange" value={'/'} onClick={handleChangeLogicalOperators}>/</button>
        <button type="button" className="orange" value={'*'} onClick={handleChangeLogicalOperators}>*</button>
        <button type="button" className="orange" value={'-'} onClick={handleChangeLogicalOperators}>-</button>
        <button type="button" className="orange" value={'+'} onClick={handleChangeLogicalOperators}>+</button>
        <button type="button" className="orange" onClick={generateResult}>=</button>
      </div>
    </section>
  )
}