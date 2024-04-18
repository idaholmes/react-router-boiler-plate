import React, { useState } from "react";

export const CustomWatchListForm = ({ onSubmit }) => {
  // set title of new watch list item to empty string
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // onSubmit, pass the event back up to the parent via props and set title back to an empty string
    onSubmit(title);
    setTitle("");
  };

  const handleChange = (event) => {
    // as the user types, deconstruct value out of the event and set it to the local state variable
    const { value } = event.target;
    setTitle(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-8"
    >
      <label className="mb-4">Enter a custom watch list item title:</label>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter title"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mt-4"
      >
        Submit
      </button>
    </form>
  );
};
