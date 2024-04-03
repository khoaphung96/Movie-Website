import React from "react";
import useHttp from "../hooks/useHttp";
import "./Banner.css";

const Banner = (props) => {
  const { movies } = useHttp(props.requests.fetchNetflixOriginals);

  const randomNumber = Math.floor(Math.random() * movies.length - 1);
  console.log(movies);

  return (
    <div className="banner">
      {movies.length > 0 && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies[randomNumber].backdrop_path}`}
          alt={movies[randomNumber].title}
        ></img>
      )}
    </div>
  );
};
export default Banner;
