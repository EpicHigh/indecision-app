import React from "react";
import { List } from "./List";

export const ListItem = ({
  isDisabled,
  makeDecision,
  removeAll,
  option,
  optionClicked,
  remove,
  editToggle,
  onEditFormSubmit,
  editValue
}) => {
  return (
    <div>
      <button disabled={isDisabled} onClick={makeDecision}>
        What should I do first?
      </button>
      <button disabled={isDisabled} onClick={removeAll}>
        Remove All
      </button>
      {!isDisabled && (
        <ol>
          <List
            onEditFormSubmit={onEditFormSubmit}
            option={option}
            editToggle={editToggle}
            optionClicked={optionClicked}
            remove={remove}
            editValue={editValue}
          />
        </ol>
      )}
    </div>
  );
};
