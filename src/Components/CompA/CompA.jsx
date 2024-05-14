import React from 'react';

const CompA = ({a}) => {
    return (
        <div>
            <h1>Component 1</h1>
            <h2>The value of a is : {a+1}</h2>
        </div>
    );
};

export default CompA;