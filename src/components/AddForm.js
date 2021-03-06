import React from "react";
import { AddOption, AddOptionInput, Button } from "../styles/main";

export const AddForm = ({ submitForm }) => (
  <div>
    <h3>Add your tasks:</h3>
    <AddOption onSubmit={submitForm}>
      <AddOptionInput type="text" name="option" required />
      <Button type="submit">Add A Task</Button>
    </AddOption>
  </div>
);
