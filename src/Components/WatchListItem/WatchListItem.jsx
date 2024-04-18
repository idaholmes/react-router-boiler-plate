import React from "react";

export const WatchListItem = ({ watchListItem, onRemoveFromWatchList }) => {
  const { image, title, bio, imdbRating, addedToWatchList } = watchListItem;

  return (
    <div className="text-center max-w-[425px]">
      <img src={image} alt="" className="mx-auto max-h-[400px] h-[100%]" />
      <h3 className="text-xl">{title} </h3>
      <p className="text-sm">{bio}</p>
      <span>{imdbRating}</span>
      <button
        className="block mx-auto"
        onClick={(event) =>
          onRemoveFromWatchList(event, {
            ...watchListItem,
            addedToWatchList: !watchListItem.addedToWatchList,
          })
        }
      >
        {addedToWatchList ? "Remove from watchlist" : "Add to watchlist"}
      </button>
    </div>
  );
};
