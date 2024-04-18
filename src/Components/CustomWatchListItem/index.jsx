import React from "react";

export const CustomWatchListItem = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <h3 className="text-xl">{item.title}</h3>
    </div>
  );
};
