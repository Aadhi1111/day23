import React from 'react';
import CompA from './Components/CompA/CompA';

const App = () => {
  const a = 10;
  return (
    <div>
      <h1>Hello World</h1>
      <h2>The value of a is : {a}</h2>
      <CompA a={a}/>
    </div>
  );
};

export default App;