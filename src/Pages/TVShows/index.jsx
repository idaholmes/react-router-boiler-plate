import React, { useEffect, useState } from "react";
import axios from "axios";
import { TVShow } from "../../Components/TVShow";

export const TVShowsPage = () => {
  // set tvShows to empty array on load
  const [tvShows, setTVShows] = useState([]);

  // extablish API URL's
  const TV_SHOW_BASE_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/tvshows";
  const WATCHLIST_URL =
    "https://66204a823bf790e070af7cfc.mockapi.io/week16/watchlist";

  // GET CRUD request; fetch all tv shows from tv show api
  const fetchTVShows = async () => {
    try {
      const { data } = await axios.get(TV_SHOW_BASE_URL);
      // after data is fetched set local movies array to what we get from api
      setTVShows(data);
    } catch (error) {
      console.error("Error fetching tv shows:", error);
    }
  };

  // DELETE & POST CRUD requests; when adding an item to your watchlist, remove it from the 'available selections' api and move it to users watchlist api
  const handleAddToWatchList = async (event, movie) => {
    event.preventDefault();
    try {
      await axios.delete(TV_SHOW_BASE_URL + `/${movie.id}`);
      await axios.post(WATCHLIST_URL, movie);
      // fetch TV shows afterwards so screen refreshes
      fetchTVShows();
    } catch (error) {
      console.error("Error adding tv show watch list:", error);
    }
  };

  useEffect(() => {
    // fetch tvShows on initial page load
    fetchTVShows();
  }, []);

  return (
    <section className="text-center">
      <h1 className="text-3xl mb-8">Welcome to the TV Shows Page!</h1>
      <div className="flex flex-wrap justify-evenly px-4">
        {/* map over tv shows and return a TVShow component for each one */}
        {tvShows?.map((tvShow) => (
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
