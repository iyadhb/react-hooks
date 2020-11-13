import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkZize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {

    window.addEventListener('resize', checkZize);
    return ()=> {
      console.log('cleanup');
      window.removeEventListener('resize', checkZize);
    }
  })
  return <>
  <h1>Widnow size</h1>
  <h2>{size}</h2>
  </>;
};

export default UseEffectCleanup;
