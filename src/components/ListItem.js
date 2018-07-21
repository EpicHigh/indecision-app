import React from "react";
import { List } from "./List";
import { Option } from "../styles/main";

export const ListItem = ({
  isDisabled,
  option,
  optionClicked,
  remove,
  editToggle,
  onEditFormSubmit,
  editValue
}) => (
  <div>
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
