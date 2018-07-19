import React from "react";

export const Action = ({isDisabled, makeDecision, removeAll}) => (
  <div>
    <button disabled={isDisabled} onClick={makeDecision}>
      What should I do first?
    </button>
    <button disabled={isDisabled} onClick={removeAll}>
      Remove All
    </button>
  </div>
);
