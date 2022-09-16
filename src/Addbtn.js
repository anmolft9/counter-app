import React from "react";

export const Addbtn = ({ setCounter }) => {
  return <button onClick={() => setCounter("+")}>+</button>;
};
