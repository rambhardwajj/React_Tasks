import React from 'react'
import { useState } from "react"

const Counter = () => {
	const [count , setCount ] = useState(0);

    return <>
        <div>{count}</div>
        <div>
            <button onClick={()=>{
                setCount(count+1);
            }} > Increment the count  </button>
        </div>
    </>    
}

export default Counter