import { faEdit, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const CustomWatchListItem = ({ item, onDelete, onEditSubmit }) => {
  // set initial editing state to false so edit form is hidden on page load
  const [isEditing, setIsEditing] = useState(false);
  // set the value of the item being edited is the title for quick editing
  const [editValue, setEditValue] = useState(item.title);

  const handleEditChange = (event) => {
    // onChange, decontruct the edit value out of the event and set it to the local state variable
    const { value } = event.target;
    setEditValue(value);
  };

  return (
    <div>
      <h3 className="text-xl">{item.title}</h3>
      <button onClick={() => onDelete(item.id)}>
        <FontAwesomeIcon icon={faTrash} style={{ marginInline: "16px" }} />
      </button>
      <button onClick={() => setIsEditing(!isEditing)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      {isEditing && (
        <form
          className="flex flex-col items-center justify-center mt-8"
          onSubmit={(event) =>
            // pass event and newWatchListItemData up to the parent component via the onEditSubmit prop
            // spread operator makes sure only the title gets altered
            onEditSubmit(event, {
              ...item,
              title: editValue,
            })
          }
        >
          <label className="mb-4">Edikt your custom watch list item:</label>
          <input
            onChange={handleEditChange}
            value={editValue}
            autoFocus
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mt-4"
          >
            Submit Edit
          </button>
        </form>
      )}
    </div>
  );
};
