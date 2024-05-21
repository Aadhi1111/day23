import React, { useState } from 'react';

const CompB = ({setValue,value}) => {
    const [status,setStatus]=useState(true)
    const handleInc=()=>{
        setStatus(false)
        setValue((value)=>value+1);
    }
    const handleDec=()=>{
        if(value>0){
            setStatus(true)
            setValue((prevval)=>prevval-1);
        }
        
    }
    return (
        <div>
            <h1>Component using state</h1>
            <h2>The value of a is : {value}</h2>
            {status? <button onClick={handleInc}>Click to increment</button> : <button onClick={handleDec}>Click to decrement</button>}
            {/* <button onClick={handleInc}>Click to increment</button>
            <br />
            <br />
    <button onClick={handleDec}>Click to decrement</button>*/}
        </div>
    );
};

export default CompB;