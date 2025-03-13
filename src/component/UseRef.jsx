import React, { useState } from 'react'

function UseRef() {

  const [value, setValue] = useState(0);


  const decrement = ()=>{
    setValue(prev=>prev-1)
  }

  const increment = ()=>{
    setValue(prev=>prev+1)
  }

  return (
    <>
      <button onClick={decrement}>-1</button>
      <h1>{value}</h1>
      <button onClick={increment}>+1</button>
    </>
  )
}

export default UseRef
