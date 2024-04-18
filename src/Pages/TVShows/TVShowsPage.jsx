import React, { useEffect, useState } from "react";
import axios from "axios";
import { TVShow } from "../../Components/TVShow/TVShow";

export const TVShowsPage = () => {
  const [tvShows, setTVShows] = useState([]);
  const BASE_URL = "https://66204a823bf790e070af7cfc.mockapi.io/week16/tvshows";

  const fetchTVShows = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      setTVShows(data);
    } catch (error) {
      console.error("Error fetching tv shows:", error);
    }
  };

  useEffect(() => {
    fetchTVShows();
  }, []);

  return (
    <section className="text-center">
      <h1>Welcome to the TV Shows Page!</h1>
      <div className="flex flex-wrap justify-evenly px-4">
        {tvShows.map(({ title, image, bio, imdbRating, addedToWatchList }) => (
          <TVShow
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
