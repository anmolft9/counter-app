import React from "react";

export const SubButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter("-")}>-</button>
    </div>
  );
};
