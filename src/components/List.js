import React from "react";
import { Button, OptionText, AddOption, AddOptionInput } from "../styles/main";

export const List = ({
  onEditFormSubmit,
  option,
  optionClicked,
  remove,
  editToggle,
  editValue
}) => {
  return option.map(
    ({ id, task }) =>
      editToggle && editValue === id ? (
        <FormElement id={id} onEditFormSubmit={onEditFormSubmit} task={task} />
      ) : (
        <Element
          optionClicked={optionClicked}
          task={task}
          id={id}
          remove={remove}
        />
      )
  );
};

const Element = ({ optionClicked, task, id, remove }) => {
  return (
    <OptionText onDoubleClick={() => optionClicked(id)} key={id}>
      {task}
      <Button onClick={() => remove(id)}>Remove</Button>
    </OptionText>
  );
};

const FormElement = ({ id, onEditFormSubmit, task }) => {
  return (
    <OptionText key={id}>
      <AddOption onSubmit={event => onEditFormSubmit(event, id)}>
        <AddOptionInput type="text" name="edit" placeholder={task} required />
        <Button type="submit">Enter</Button>
      </AddOption>
    </OptionText>
  );
};
