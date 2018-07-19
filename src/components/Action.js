import React from "react";
import {
  BigButton,
  WidgetHeader,
  RemoveAllButton,
  WidgetMessage
} from "../styles/main";

export const Action = ({ isDisabled, makeDecision, removeAll }) => (
  <div>
    <BigButton disabled={isDisabled} onClick={makeDecision}>
      What should I do first?
    </BigButton>
    <WidgetHeader>
      <RemoveAllButton disabled={isDisabled} onClick={removeAll}>
        Remove All
      </RemoveAllButton>
    </WidgetHeader>
    {isDisabled && (
      <WidgetMessage>Pleases add some task to get started</WidgetMessage>
    )}
  </div>
);
