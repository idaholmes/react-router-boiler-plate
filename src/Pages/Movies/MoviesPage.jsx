import React, { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(movies);
  return (
    <section>
      <h1>Welcome to the Movies Page!</h1>
    </section>
  );
};
