import React from "react";
import { Addbtn } from "./Addbtn";
import { SubButton } from "./SubButton";

export const Button = ({ handleOnClick }) => {
  return (
    <>
      <SubButton setCounter={handleOnClick} />
      <Addbtn setCounter={handleOnClick} />
    </>
  );
};
