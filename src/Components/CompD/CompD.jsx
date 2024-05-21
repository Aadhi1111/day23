import React from 'react';

const CompD = ({setPerson,person}) => {
    return (
        <>
           <h1>Array of objects</h1>
           {person.map((element,index)=>{
            return(
              
                <div key={element.id}>
                    {element.name}
                    <br/>
                    {element.age}
                </div>
            )
           })} 
        </>
    );
};

export default CompD;