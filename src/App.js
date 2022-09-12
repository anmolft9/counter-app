import { useState } from "react";
import { Addbtn } from "./Addbtn";
import "./App.css";
import { Button } from "./Button";
import { Display } from "./Display";
import { SubButton } from "./SubButton";

function App() {
  const [counter, setCounter] = useState(0);

  const handleOnClick = (operator) => {
    operator === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <div className="App">
      <Display counter={counter} />
      <Button handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
