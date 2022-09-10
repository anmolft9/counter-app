import { useState } from "react";
import { Addbtn } from "./Addbtn";
import "./App.css";
import { SubButton } from "./SubButton";

function App() {
  const [counter, setCounter] = useState(0);

  const handleOnClick = (operator) => {
    operator === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <div className="App">
      <SubButton setCounter={handleOnClick} />
      <span>{counter}</span>
      <Addbtn setCounter={handleOnClick} />
    </div>
  );
}

export default App;
