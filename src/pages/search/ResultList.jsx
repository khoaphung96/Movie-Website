import React, { useState, useCallback, useEffect } from "react";
import "./ResultList.css";
import MovieDetail from "../browse/MovieDetail";

const ResultList = (props) => {
  const API_KEY = "829eebc9305fe5b2c89259c54363b7e6";

  const [movies, setMovies] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [detailMovie, setDetailMovie] = useState();
  const [currentIndex, setCurrentIndex] = useState("0");

  const fecthMoviesHandler = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${props.query}`
    );

    const data = await response.json();

    const movies = data.results.map((movieData) => movieData);
    setMovies(movies);
  }, [props.query]);

  useEffect(() => {
    fecthMoviesHandler();
  }, [fecthMoviesHandler]);

  const showDetailMovie = (event) => {
    setIsShow((prevShow) => !prevShow);
    for (const index in movies) {
      if (movies[index].id === Number(event.currentTarget.id)) {
        setDetailMovie(movies[index]);
        setCurrentIndex(index);

        if (index !== currentIndex) {
          setIsShow(true);
        }
      }
    }
  };

  return (
    <div className="search-list">
      <div className="search-group">
        {isShow && <MovieDetail detailMovie={detailMovie}></MovieDetail>}
        {movies.map((movieData) => (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            key={movieData.id}
            alt={movieData.title ? movieData.title : movieData.name}
            width="200px"
            onClick={showDetailMovie}
            id={movieData.id}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default ResultList;
