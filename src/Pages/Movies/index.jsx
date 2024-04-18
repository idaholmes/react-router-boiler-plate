import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../../Components/Movie";

export const MoviesPage = () => {
  // set movies to empty array on load
  const [movies, setMovies] = useState([]);

  // extablish API URL's
  const BASE_URL = "https://66204a823bf790e070af7cfc.mockapi.io/week16/movies";
  const WATCHLIST_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/watchlist";

  // GET CRUD request; fetch all movies
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      // after data is fetched set local movies array to what we get from api
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // DELETE & POST CRUD requests; when adding an item to your watchlist, remove it from the 'available selections' api and move it to users watchlist api
  const handleAddToWatchList = async (event, movie) => {
    event.preventDefault();
    try {
      await axios.delete(BASE_URL + `/${movie.id}`);
      await axios.post(WATCHLIST_URL, movie);
      // fetch movies afterwards so screen refreshes
      fetchMovies();
    } catch (error) {
      console.error("Error adding movie to watch list:", error);
    }
  };

  useEffect(() => {
    // fetch movies on initial page load
    fetchMovies();
  }, []);

  return (
    <section className="text-center">
      <h1 className="text-3xl mb-8">Welcome to the Movies Page!</h1>
      <div className="flex flex-wrap justify-evenly px-4">
        {/* map over movies and return a Movie component for each one */}
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
