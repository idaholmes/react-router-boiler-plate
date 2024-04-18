import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

export const TVShow = ({ tvShow, onAddToWatchList }) => {
  const { image, title, bio, imdbRating } = tvShow;

  return (
    <div className="text-center max-w-[425px]">
      <img src={image} alt="" className="mx-auto max-h-[400px] h-[100%]" />
      <h3 className="text-xl">{title} </h3>
      <p className="text-sm">{bio}</p>
      <span>IMDb Rating: {imdbRating}</span>
      <button
        className="block mx-auto"
        onClick={(event) =>
          onAddToWatchList(event, {
            ...tvShow,
            addedToWatchList: !tvShow.addedToWatchList,
          })
        }
      >
        <FontAwesomeIcon icon={faPlus} alt="Add" className="mr-2" />
        Add to watchlist
      </button>
    </div>
  );
};
