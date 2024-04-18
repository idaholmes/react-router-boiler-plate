import React from "react";

export const Movie = ({ movie, onAddToWatchList }) => {
  const { image, title, bio, imdbRating } = movie;
  return (
    <div className="text-center max-w-[425px]">
      <img src={image} alt="" className="mx-auto max-h-[400px] h-[100%]" />
      <h3 className="text-xl">{title} </h3>
      <p className="text-sm">{bio}</p>
      <span>{imdbRating}</span>
      <button
        className="block mx-auto"
        onClick={(event) =>
          onAddToWatchList(event, {
            ...movie,
            addedToWatchList: !movie.addedToWatchList,
          })
        }
      >
        + Add to watchlist
      </button>
    </div>
  );
};