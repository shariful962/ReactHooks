import React, {useState, useEffect, useRef} from 'react'

function UseRef1() {
    const inputEle = useRef();

    const btnClick = ()=>{
        console.log(inputEle.current);
        inputEle.current.style.background = 'red';

    }

  return (
    <div>
      <input type="text"  ref={inputEle}/>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default UseRef1
