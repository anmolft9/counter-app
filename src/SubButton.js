import React from "react";

export const SubButton = ({ setCounter }) => {
  return <button onClick={() => setCounter("-")}>-</button>;
};
