import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";

export const WatchListItem = ({ watchListItem, onRemoveFromWatchList }) => {
  const { image, title, bio, imdbRating } = watchListItem;

  return (
    <div className="text-center max-w-[425px]">
      <img src={image} alt="" className="mx-auto max-h-[400px] h-[100%]" />
      <h3 className="text-xl">{title} </h3>
      <p className="text-sm">{bio}</p>
      <span>IMDb Rating: {imdbRating}</span>
      <button
        className="block mx-auto"
        onClick={(event) =>
          // use spread operator to flip the addedToWatchList boolean and send up to parent via onRemoveFromWatchList prop
          onRemoveFromWatchList(event, {
            ...watchListItem,
            addedToWatchList: !watchListItem.addedToWatchList,
          })
        }
      >
        <FontAwesomeIcon icon={faTrash} alt="Remove" className="mr-2" />
        Remove from watchlist
      </button>
    </div>
  );
};
