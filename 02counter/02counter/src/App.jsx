import { useState } from "react";
import "./App.css";

function App() {
  //let counter = 5;

  let [counter, setCounter] = useState(5);

  const IncValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const DecValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Code Aryan</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={IncValue}>(+) Increase Value</button>
      <br />
      <br />
      <button onClick={DecValue}>(-) Decrease Value</button>
    </>
  );
}

export default App;
