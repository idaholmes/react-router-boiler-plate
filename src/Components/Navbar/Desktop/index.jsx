import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/fontawesome-free-solid";

export const NavbarDesktop = ({ className }) => {
  return (
    <nav className="hidden md:block">
      <div className="flex justify-between p-6 items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faVideo} alt="Logo" className="mr-6" />
          <h2 className="text-xl">Mov-ease</h2>
        </div>
        <ul className="flex justify-end">
          <li className="ml-6 text-lg">
            <a href="/">Home</a>
          </li>
          <li className="ml-6 text-lg">
            <a href="/movies">Movies</a>
          </li>
          <li className="ml-6 text-lg">
            <a href="/tv">TV</a>
          </li>
          <li className="ml-6 text-lg">
            <a href="/watchlist">Watchlist</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
