import React from "react";

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
        <li key={id}>
          <form onSubmit={event => onEditFormSubmit(event, id)}>
            <input type="text" name="edit" placeholder={task} required />
            <button type="submit">Enter</button>
          </form>
        </li>
      ) : (
        <li onDoubleClick={() => optionClicked(id)} key={id}>
          {task}
          <button onClick={() => remove(id)}>Remove</button>
        </li>
      )
  );
};
