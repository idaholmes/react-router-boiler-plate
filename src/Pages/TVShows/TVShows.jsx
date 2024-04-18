import React, { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(tvShows);
  return (
    <section>
      <h1>Welcome to the TV Shows Page!</h1>
    </section>
  );
};
