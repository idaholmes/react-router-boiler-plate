import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../../Components/Movie";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const BASE_URL = "https://66204a823bf790e070af7cfc.mockapi.io/week16/movies";
  const WATCHLIST_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/watchlist";

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleAddToWatchList = async (event, movie) => {
    event.preventDefault();
    try {
      await axios.delete(BASE_URL + `/${movie.id}`);
      await axios.post(WATCHLIST_URL, movie);
      fetchMovies();
    } catch (error) {
      console.error("Error deleting from watch list:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="text-center">
      <h1>Welcome to the Movies Page!</h1>
      <div className="flex flex-wrap justify-evenly px-4">
        {movies?.map((movie) => (
          <Movie
            movie={movie}
            onAddToWatchList={handleAddToWatchList}
            key={movie.title}
          />
        ))}
      </div>
    </section>
  );
};
