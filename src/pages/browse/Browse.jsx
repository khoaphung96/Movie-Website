import React from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

function Browse() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <MovieList></MovieList>
    </div>
  );
}

export default Browse;
