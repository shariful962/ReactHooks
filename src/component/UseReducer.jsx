import React, {useState} from 'react'

function UseReducer() {

    const [count, setCount] =  useState(0)



    const incrementCount = ()=> {
        setCount(prev => prev + 1);
    }
    const decrementCount = ()=> {
        setCount(prev => prev - 1);
    }

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={decrementCount}>Decrease</button>
      <button onClick={incrementCount}>Increase</button>
    </>
  )
}

export default UseReducer
