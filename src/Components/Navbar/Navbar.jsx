import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/fontawesome-free-solid";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <FontAwesomeIcon icon={faVideo} alt="Logo" className="logo" />
          <h2>Mov-ease</h2>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/tv">TV</a>
          </li>
          <li>
            <a href="/watchlist">Watchlist</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
