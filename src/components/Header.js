import React from "react";

export const Header = ({ optionLength }) => (
  <div>
    <h1>To do x Indecision App</h1>
    <p>Put your life in a hand of computer</p>
    <p>
      {optionLength > 0
        ? `Here are your options ${optionLength}`
        : `No options`}
    </p>
  </div>
);
