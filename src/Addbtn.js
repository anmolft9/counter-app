import React from "react";

export const Addbtn = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter("+")}>+</button>
    </div>
  );
};
