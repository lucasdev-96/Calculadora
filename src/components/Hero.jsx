import React, { useState } from 'react';
import '../styles/calculadora.css';

function Hero() {
  const [num, setNum] = useState({ num1: '', num2: '' });
  const [result, setResult] = useState(0);
  const [operators, setOperators] = useState('');
  // const [renderResult, setRenderResult] = useState(false);
  const { num1, num2 } = num;

  const getOperators = (a, b, operator) => {
    let arithmeticOperation;
    if (operator === '+') arithmeticOperation = a + b;
    if (operator === '-') arithmeticOperation = a - b;
    if (operator === '*') arithmeticOperation = a * b;
    if (operator === '/') arithmeticOperation = a / b;
    return arithmeticOperation;
  };

  const calculator = (a = 0, b = 0, operator) => {
    setResult(getOperators(a, b, operator));
  };

  const handleNumber = ({ target: { name, value } }) => {
    setNum({
      ...num,
      [name]: Number(value.replace(/[^0-9]+/g, '')),
    });
  };

  return (
    <div className="calculator_main">
      <main>
        <div className="result">{ !operators ? 'Adicione dois números e o operador aritmético' : result}</div>
        <div className="Numbers">
          <input placeholder="0" type="text" name="num1" onChange={handleNumber} value={num1} />
          <input placeholder="0" type="text" name="num2" onChange={handleNumber} value={num2} />
        </div>
        <div className="operators">
          <button onClick={() => setOperators('+')} type="button">+</button>
          <button onClick={() => setOperators('-')} type="button">-</button>
          <button onClick={() => setOperators('*')} type="button">*</button>
          <button onClick={() => setOperators('+')} type="button">/</button>
        </div>
        <div className="btns">
          <button type="button" onClick={() => calculator(num1, num2, operators)}>resultado</button>
          <button type="button" onClick={() => setResult(0)}>Limpar</button>
        </div>
      </main>
    </div>
  );
}

export default Hero;
