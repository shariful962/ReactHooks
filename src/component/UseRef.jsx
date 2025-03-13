import React, {useEffect, useState, useRef } from 'react'

function UseRef() {

  const [value, setValue] = useState(0);

  const count = useRef(10);
  console.log(count);

  const decrement = ()=>{
    setValue(prev=>prev-1)
  }

  const increment = ()=>{
    setValue(prev=>prev+1)
  }

  useEffect(()=>{
    count.current =count.current+1;
  })


  return (
    <>
      <button onClick={decrement}>-1</button>
      <h1>{value}</h1>
      <button onClick={increment}>+1</button>
      <h1>Render Count: {count.current}</h1>
    </>
  )
}

export default UseRef
