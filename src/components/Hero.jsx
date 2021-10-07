import React, { useState } from 'react';

function Hero() {
  const [num, setNum] = useState({ num1: 0, num2: 0 });
  const [result, setResult] = useState(0);
  // const [renderResult, setRenderResult] = useState(false);
  const { num1, num2 } = num;

  const sum = (a, operador, b) => {
    const resultado = Number(a) + Number(b);
    setResult(resultado);
  };

  const handleInput = ({ target: { value } }) => {
    setNum({
      ...num,
      num1: value,
      num2: value,
    });
  };

  // const handleInput2 = ({ target: { value } }) => {
  //   setNum({
  //     ...num,
  //     num2: value,
  //   });
  // };

  return (
    <main className="calculator_main">
      <p>{result}</p>
      <input type="text" onChange={handleInput} value={num1} />
      <input type="text" onChange={handleInput} value={num2} />
      <button type="button" onClick={() => sum(num1, num2)}>resultado</button>
      {/* <button type="button" onClick={() => setRenderResult(false)}>Limpar</button> */}
    </main>
  );
}

export default Hero;
