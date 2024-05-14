import React, { useState } from 'react';
import CompA from './Components/CompA/CompA';
import CompB from './Components/CompB/CompB';

const App = () => {
  const a = 10;//props
  //state
  const [value,setValue]=useState(0);
  return (
    <div>
      <h1>Hello World</h1>
      <h2>The value of a from props is : {a}</h2>
      <h2>The value of a from state is : {value}</h2>
      {value}
      <CompA a={a}/>
      <CompB setValue={setValue} value={value}/>
    </div>
  );
};

export default App;