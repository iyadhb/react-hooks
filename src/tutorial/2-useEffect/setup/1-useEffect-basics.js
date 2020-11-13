import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
          document.title= `New Messages(${value})`

    }
  },[value])
  
  // to run only on the first render
  useEffect(() => {
    console.log('runs only on first render')
  }, [])

  return <>
  <h1>{value}</h1>
  <button className="btn" onClick={() => setValue(value + 1)} >just click</button>
  </>;
};

export default UseEffectBasics;
