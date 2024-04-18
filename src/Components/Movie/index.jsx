import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

export const Movie = ({ movie, onAddToWatchList }) => {
  // decontruct key value pairs out of movie prop for easy use
  const { image, title, bio, imdbRating } = movie;
  return (
    <div className="text-center max-w-[425px]">
      <img src={image} alt="" className="mx-auto max-h-[400px] h-[100%]" />
      <h3 className="text-xl">{title} </h3>
      <p className="text-sm">{bio}</p>
      <span>IMDb Rating: {imdbRating}</span>
      <button
        className="block mx-auto"
        onClick={(event) =>
          // use spread operator to only flip addedToWatchList boolean, and pass the event back up to the parent compoent
          onAddToWatchList(event, {
            ...movie,
            addedToWatchList: !movie.addedToWatchList,
          })
        }
      >
        <FontAwesomeIcon icon={faPlus} alt="Add" className="mr-2" />
        Add to WatchList
      </button>
    </div>
  );
};
