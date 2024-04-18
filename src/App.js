import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage";
import { MoviesPage } from "./Pages/Movies/MoviesPage";
import { TVShowsPage } from "./Pages/TVShows/TVShowsPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { WatchListPage } from "./Pages/WatchList/WatchlistPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/tv" component={TVShowsPage} />
      <Route path="/watchlist" component={WatchListPage} />
    </Router>
  );
}

export default App;
