import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage";
import { FavoriteMoviesPage } from "./Pages/FavoriteMovies/FavoriteMoviesPage";
import { FavoriteTVShowsPage } from "./Pages/FavoriteTVShows/FavoriteTVShows";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={FavoriteMoviesPage} />
      <Route path="/tv" component={FavoriteTVShowsPage} />
    </Router>
  );
}

export default App;
