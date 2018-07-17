import React from "react";

export const AddForm = ({ submitForm }) => {
  return (
    <div>
      <h3>Add your option:</h3>
      <form onSubmit={submitForm}>
        <input type="text" name="option" required />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
};
