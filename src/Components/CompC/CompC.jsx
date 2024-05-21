import React from 'react';

const CompC = ({setArrValue,arrValue}) => {
    const handleRemove=(indexpos)=>{
        setArrValue((initialval)=>initialval.filter((element,index)=>index !==indexpos))
    }
    return (
        <div>
            <h1>Component for array and array of object using state</h1>
            {arrValue.map((element,index)=>{
                return (
                    <> 
                    <div key={index}>
                        <h1>{element}</h1>
                        <button onClick={()=>{handleRemove(index)}}>Remove</button>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default CompC;