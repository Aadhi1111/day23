import React from 'react';

const CompA = ({a}) => {
const handleSubmit = ()=>{
    a = a+1;
    //console.log(a)
}
    return (
        <div>
            <h1>Component using props</h1>
            <h2>The value of a is : {a}</h2>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default CompA;