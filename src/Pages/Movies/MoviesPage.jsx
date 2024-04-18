import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../../Components/Movie/Movie";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const BASE_URL = "https://66204a823bf790e070af7cfc.mockapi.io/week16/movies";

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="text-center">
      <h1>Welcome to the Movies Page!</h1>
      <div className="flex flex-wrap justify-evenly px-4">
        {movies.map(({ title, image, bio, imdbRating, addedToWatchList }) => (
          <Movie
            title={title}
            image={image}
            bio={bio}
            imdbRating={imdbRating}
            addedToWatchList={addedToWatchList}
            key={title}
          />
        ))}
      </div>
    </section>
  );
};
