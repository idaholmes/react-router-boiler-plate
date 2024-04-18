import React, { useEffect, useState } from "react";
import axios from "axios";
import { TVShow } from "../../Components/TVShow";

export const TVShowsPage = () => {
  const [tvShows, setTVShows] = useState([]);
  const TV_SHOW_BASE_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/tvshows";
  const WATCHLIST_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/watchlist";

  const fetchTVShows = async () => {
    try {
      const { data } = await axios.get(TV_SHOW_BASE_URL);
      setTVShows(data);
    } catch (error) {
      console.error("Error fetching tv shows:", error);
    }
  };

  const handleAddToWatchList = async (event, movie) => {
    event.preventDefault();
    try {
      await axios.delete(TV_SHOW_BASE_URL + `/${movie.id}`);
      await axios.post(WATCHLIST_URL, movie);
      fetchTVShows();
    } catch (error) {
      console.error("Error adding tv show watch list:", error);
    }
  };

  useEffect(() => {
    fetchTVShows();
  }, []);

  return (
    <section className="text-center">
      <h1 className="text-3xl mb-8">Welcome to the TV Shows Page!</h1>
      <div className="flex flex-wrap justify-evenly px-4">
        {tvShows.map((tvShow) => (
          <TVShow
            tvShow={tvShow}
            onAddToWatchList={handleAddToWatchList}
            key={tvShow.title}
          />
        ))}
      </div>
    </section>
  );
};
