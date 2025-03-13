import React, {useState} from 'react'
import Header from './Header';

function CallBack() {

    const [count, setCount] = useState(0);

    const updateCount = ()=> {
        setCount(prev => prev + 1)
    }
    
  return (
    <>
        <Header/>

      <h1>Count: {count} </h1>
      <button onClick={updateCount}>Click Here</button>
    </>
  )
}

export default CallBack;
