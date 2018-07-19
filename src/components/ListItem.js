import React from "react";
import { List } from "./List";
import { Action } from "./Action";
import { Option } from "../styles/main";

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
}) => (
  <div>
    <Action
      isDisabled={isDisabled}
      makeDecision={makeDecision}
      removeAll={removeAll}
    />
    {!isDisabled && (
      <Option>
        <List
          onEditFormSubmit={onEditFormSubmit}
          option={option}
          editToggle={editToggle}
          optionClicked={optionClicked}
          remove={remove}
          editValue={editValue}
        />
      </Option>
    )}
  </div>
);
