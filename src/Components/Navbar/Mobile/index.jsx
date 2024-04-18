import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faVideo } from "@fortawesome/fontawesome-free-solid";

export const NavBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="md:hidden">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faVideo} alt="Logo" className="mr-2" />
          <h2 className="text-xl">Mov-ease</h2>
        </div>
        <button
          onClick={toggleMenu}
          className="text-lg focus:outline-none focus:text-gray-600"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {menuOpen && (
        <ul className="flex flex-col items-center px-6 pb-6">
          <li className="mt-4 text-lg">
            <a href="/">Home</a>
          </li>
          <li className="mt-4 text-lg">
            <a href="/movies">Movies</a>
          </li>
          <li className="mt-4 text-lg">
            <a href="/tv">TV</a>
          </li>
          <li className="mt-4 text-lg">
            <a href="/watchlist">Watchlist</a>
          </li>
        </ul>
      )}
    </nav>
  );
};
