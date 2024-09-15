import React, { useState } from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const[changeby,setChangeBy]=useState(1)
   const  handleIncrement=(changeby)=>{
    console.log(typeof(parseInt(changeby)))
    setCount(pre=>pre+parseInt(changeby))
   }
   
   const  handleDecrement=(changeby)=>{
    setCount(pre=>pre-parseInt(changeby))
   }
   
   const  handleReset=()=>{
    setCount(0)
   }
  return (
    <div>
       <h1 >Counter</h1>
        <h2>{count}</h2>
        <div>
            <button onClick={()=>{handleIncrement(changeby)}}>+</button>
            <button onClick={()=>{handleDecrement(changeby)}}>-</button>
        </div>
        <div>
            Increment/Decrement by:
            <input type='Number' onChange={(e)=>setChangeBy(e.target.value)}  />
        </div>
        <button onClick={handleReset}>Reset</button>

    </div>
  )
}

export default Counter
