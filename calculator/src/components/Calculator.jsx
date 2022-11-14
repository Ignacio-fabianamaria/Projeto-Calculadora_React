import React, { useState } from "react";
import './calculator.css'

export default function Calcultor() {
  const [num, setNum] = useState([0]);
  const [firstNum, setFirstNum] = useState([0]);
  const [operator, setOperator] = useState();

  const handleChangeEnterDigit = ({ target: { value } }) => {
    num === 0 ? setNum(value) : setNum(num + value);
  }

  const handleChangeClear = () => {
    setNum(0)
  }

  const handleChangeBack = () => {
    num.length > 0 ? setNum(num.length - 1) : setNum(0)
  }

  const handleChangepercentage = () => {
    setNum(num / 100);
  }

  const handleChangePositiveNegative = () => {
    num > 0 ? setNum(-num) : setNum(Math.abs(num))
  }

  const handleChangeLogicalOperators = ({ target: { value } }) => {
    setOperator(value);
    setFirstNum(num);
    setNum(0);
  }

  const generateResult = () => {
if(operator === '/') {
  setNum(Number(firstNum)/Number(num))
} else if (operator === '*') {
  setNum(Number(firstNum)*Number(num))
} else if (operator === '+') {
  setNum(Number(firstNum)+ Number(num))
  } else if (operator === '-') {
    setNum(Number(firstNum)-Number(num))
  }
}

  return (
    <section className="calculator">
      <div className="result-screen">
        <h1 className="result">{num}</h1>
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