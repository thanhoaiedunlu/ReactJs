import React from 'react';
import Hello from "./component/Hello";

function App() {
    let names = ["January", "February", "March", "April"];
  return (
    <div className="App">
        <Hello name = "hi "/>
        {names.map(value => <Hello name={value}/>)}
    </div>
  );
}

export default App;
