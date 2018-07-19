import React from "react";
import { Button, OptionText, AddOption, AddOptionInput } from "../styles/main";

export const List = ({
  onEditFormSubmit,
  option,
  optionClicked,
  remove,
  editToggle,
  editValue
}) =>
  option.map(
    ({ id, task }) =>
      editToggle && editValue === id ? (
        <OptionText key={id}>
          <AddOption onSubmit={event => onEditFormSubmit(event, id)}>
            <AddOptionInput
              type="text"
              name="edit"
              placeholder={task}
              required
            />
            <Button type="submit">Enter</Button>
          </AddOption>
        </OptionText>
      ) : (
        <OptionText onDoubleClick={() => optionClicked(id)} key={id}>
          {task}
          <Button onClick={() => remove(id)}>Remove</Button>
        </OptionText>
      )
  );
