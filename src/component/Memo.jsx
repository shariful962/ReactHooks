import React, {useState, useEffect, useRef, useMemo} from "react";




function Memo() {

    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function CubeNum(num){
        console.log("calculation Done....");
        return Math.pow(num,3);
    }

  const result = useMemo(()=>{return CubeNum(number)}, [number])

    const handleChange = (e)=>{
        setNumber(e.target.value);

    }

  return (
    <>
      <input type="number" value={number} onChange={handleChange} />
      <h1>Cube of the Number: {result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>counter++</button>
      <h1>counter is : {counter}</h1>
    </>
  )
}

export default Memo
