import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { MoviesPage } from "./Pages/Movies";
import { TVShowsPage } from "./Pages/TVShows";
import { WatchListPage } from "./Pages/WatchList";
import { Navbar } from "./Components/Navbar";

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
