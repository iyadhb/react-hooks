import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
    <h1>{text || 'Iyad Barakat'}</h1>
    {text && <h1>Hello World</h1>}
    {!text && <h1>There is no text</h1>}
  </>;
};

export default ShortCircuit;
