import { useEffect, useState, useCallback } from "react";

const useHttp = (fetchChangeType) => {
  const [movies, setMovies] = useState([]);

  const fecthMoviesHandler = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${fetchChangeType}`
    );

    const data = await response.json();

    const movies = data.results.map((movieData) => movieData);
    setMovies(movies);
  }, [fetchChangeType]);

  useEffect(() => {
    fecthMoviesHandler();
  }, [fecthMoviesHandler]);
  return { movies };
};
export default useHttp;
