import React, {useState, useEffect} from 'react'


function UseEffect() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Shariful");

    useEffect(()=>{
        setTimeout(()=>{
            setCount (c=>c+1);
        },2000)
    },[count, name])

  return (
    <div>
      <h1>I've render {count} times</h1>
    </div>
  )
}

export default UseEffect;

