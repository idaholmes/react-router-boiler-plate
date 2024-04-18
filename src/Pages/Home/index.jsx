import React from "react";

export const HomePage = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl">
        Welcome to <span>Move-ease</span>!
      </h1>
      <p className="text-xl mt-6">
        The easy place to find movies & tv shows, and add them to your
        watchlist.
      </p>
    </section>
  );
};
