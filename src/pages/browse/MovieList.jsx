import React, { useState } from "react";
import useHttp from "../hooks/useHttp";
import MovieDetail from "./MovieDetail";
import "./MovieList.css";

const MovieList = () => {
  const API_KEY = "829eebc9305fe5b2c89259c54363b7e6";

  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/trending/all/day?with_networks=213&api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };

  const [isShowOriginal, setIsShowOriginal] = useState(false);
  const [isShowTrending, setIsShowTrending] = useState(false);
  const [isShowTopRated, setIsShowTopRated] = useState(false);
  const [isShowAction, setIsShowAction] = useState(false);
  const [isShowComedy, setIsShowComedy] = useState(false);
  const [isShowHorror, setIsShowHorror] = useState(false);
  const [isShowRomance, setIsShowRomance] = useState(false);
  const [isShowDocument, setIsShowDocument] = useState(false);

  const [detailMovieOriginal, setDetailMovieOriginal] = useState();
  const [detailMovieTrending, setDetailMovieTrending] = useState();
  const [detailMovieTopRated, setDetailMovieTopRated] = useState();
  const [detailMovieAction, setDetailMovieAction] = useState();
  const [detailMovieComedy, setDetailMovieComedy] = useState();
  const [detailMovieHorror, setDetailMovieHorror] = useState();
  const [detailMovieRomance, setDetailMovieRomance] = useState();
  const [detailMovieDocument, setDetailMovieDocument] = useState();

  const [currentIndex, setCurrentIndex] = useState("0");

  const { movies: moviesTrending } = useHttp(requests.fetchTrending);
  const { movies: moviesOriginal } = useHttp(requests.fetchNetflixOriginals);
  const { movies: moviesTopRated } = useHttp(requests.fetchTopRated);
  const { movies: moviesAction } = useHttp(requests.fetchActionMovies);
  const { movies: moviesComedy } = useHttp(requests.fetchComedyMovies);
  const { movies: moviesHorror } = useHttp(requests.fetchHorrorMovies);
  const { movies: moviesRomance } = useHttp(requests.fetchRomanceMovies);
  const { movies: moviesDocument } = useHttp(requests.fetchDocumentaries);

  const showDetailMovieOriginal = (event) => {
    setIsShowOriginal((prevShow) => !prevShow);
    for (const index in moviesOriginal) {
      if (moviesOriginal[index].id === Number(event.currentTarget.id)) {
        const totalIndex = index;
        setDetailMovieOriginal(moviesOriginal[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(true);
          setIsShowTrending(false);
          setIsShowTopRated(false);
          setIsShowAction(false);
          setIsShowComedy(false);
          setIsShowHorror(false);
          setIsShowRomance(false);
          setIsShowDocument(false);
        }
      }
    }
  };

  const showDetailMovieTrending = (event) => {
    setIsShowTrending((prevShow) => !prevShow);
    for (const index in moviesTrending) {
      if (moviesTrending[index].id === Number(event.currentTarget.id)) {
        const totalIndex = `2${index}`;
        setDetailMovieTrending(moviesTrending[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(false);
          setIsShowTrending(true);
          setIsShowTopRated(false);
          setIsShowAction(false);
          setIsShowComedy(false);
          setIsShowHorror(false);
          setIsShowRomance(false);
          setIsShowDocument(false);
        }
      }
    }
  };

  const showDetailMovieTopRated = (event) => {
    setIsShowTopRated((prevShow) => !prevShow);
    for (const index in moviesTopRated) {
      if (moviesTopRated[index].id === Number(event.currentTarget.id)) {
        const totalIndex = `4${index}`;
        setDetailMovieTopRated(moviesTopRated[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(false);
          setIsShowTrending(false);
          setIsShowTopRated(true);
          setIsShowAction(false);
          setIsShowComedy(false);
          setIsShowHorror(false);
          setIsShowRomance(false);
          setIsShowDocument(false);
        }
      }
    }
  };

  const showDetailMovieAction = (event) => {
    setIsShowAction((prevShow) => !prevShow);
    for (const index in moviesAction) {
      if (moviesAction[index].id === Number(event.currentTarget.id)) {
        const totalIndex = `6${index}`;
        setDetailMovieAction(moviesAction[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(false);
          setIsShowTrending(false);
          setIsShowTopRated(false);
          setIsShowAction(true);
          setIsShowComedy(false);
          setIsShowHorror(false);
          setIsShowRomance(false);
          setIsShowDocument(false);
        }
      }
    }
  };

  const showDetailMovieComedy = (event) => {
    setIsShowComedy((prevShow) => !prevShow);
    for (const index in moviesComedy) {
      if (moviesComedy[index].id === Number(event.currentTarget.id)) {
        const totalIndex = `8${index}`;
        setDetailMovieComedy(moviesComedy[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(false);
          setIsShowTrending(false);
          setIsShowTopRated(false);
          setIsShowAction(false);
          setIsShowComedy(true);
          setIsShowHorror(false);
          setIsShowRomance(false);
          setIsShowDocument(false);
        }
      }
    }
  };

  const showDetailMovieHorror = (event) => {
    setIsShowHorror((prevShow) => !prevShow);
    for (const index in moviesHorror) {
      if (moviesHorror[index].id === Number(event.currentTarget.id)) {
        const totalIndex = `10${index}`;
        setDetailMovieHorror(moviesHorror[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(false);
          setIsShowTrending(false);
          setIsShowTopRated(false);
          setIsShowAction(false);
          setIsShowComedy(false);
          setIsShowHorror(true);
          setIsShowRomance(false);
          setIsShowDocument(false);
        }
      }
    }
  };

  const showDetailMovieRomance = (event) => {
    setIsShowRomance((prevShow) => !prevShow);
    for (const index in moviesRomance) {
      if (moviesRomance[index].id === Number(event.currentTarget.id)) {
        const totalIndex = `12${index}`;
        setDetailMovieRomance(moviesRomance[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(false);
          setIsShowTrending(false);
          setIsShowTopRated(false);
          setIsShowAction(false);
          setIsShowComedy(false);
          setIsShowHorror(false);
          setIsShowRomance(true);
          setIsShowDocument(false);
        }
      }
    }
  };

  const showDetailMovieDocument = (event) => {
    setIsShowDocument((prevShow) => !prevShow);
    for (const index in moviesDocument) {
      if (moviesDocument[index].id === Number(event.currentTarget.id)) {
        const totalIndex = `14${index}`;
        setDetailMovieDocument(moviesDocument[index]);
        setCurrentIndex(totalIndex);

        if (totalIndex !== currentIndex) {
          setIsShowOriginal(false);
          setIsShowTrending(false);
          setIsShowTopRated(false);
          setIsShowAction(false);
          setIsShowComedy(false);
          setIsShowHorror(false);
          setIsShowRomance(false);
          setIsShowDocument(true);
        }
      }
    }
  };

  return (
    <div className="movie-list">
      <div id="original">
        <h2>Original</h2>
        <div className="movie-group">
          {moviesOriginal.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieOriginal}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowOriginal && (
          <MovieDetail detailMovie={detailMovieOriginal}></MovieDetail>
        )}
      </div>
      <div id="trending">
        <h2>Trending</h2>
        <div className="movie-group">
          {moviesTrending.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieTrending}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowTrending && (
          <MovieDetail detailMovie={detailMovieTrending}></MovieDetail>
        )}
      </div>
      <div id="top-rated">
        <h2>Top Rated</h2>
        <div className="movie-group">
          {moviesTopRated.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieTopRated}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowTopRated && (
          <MovieDetail detailMovie={detailMovieTopRated}></MovieDetail>
        )}
      </div>
      <div id="action">
        <h2>Action</h2>
        <div className="movie-group">
          {moviesAction.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieAction}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowAction && (
          <MovieDetail detailMovie={detailMovieAction}></MovieDetail>
        )}
      </div>
      <div id="Comedy">
        <h2>Comedy</h2>
        <div className="movie-group">
          {moviesComedy.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieComedy}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowComedy && (
          <MovieDetail detailMovie={detailMovieComedy}></MovieDetail>
        )}
      </div>
      <div id="horror">
        <h2>Horror</h2>
        <div className="movie-group">
          {moviesHorror.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieHorror}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowHorror && (
          <MovieDetail detailMovie={detailMovieHorror}></MovieDetail>
        )}
      </div>
      <div id="romance">
        <h2>Romance</h2>
        <div className="movie-group">
          {moviesRomance.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieRomance}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowRomance && (
          <MovieDetail detailMovie={detailMovieRomance}></MovieDetail>
        )}
      </div>
      <div id="document">
        <h2>Documentaries</h2>
        <div className="movie-group">
          {moviesDocument.map((movieData) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
              key={movieData.id}
              alt={movieData.title ? movieData.title : movieData.name}
              width="200px"
              onClick={showDetailMovieDocument}
              id={movieData.id}
            ></img>
          ))}
        </div>
        {isShowDocument && (
          <MovieDetail detailMovie={detailMovieDocument}></MovieDetail>
        )}
      </div>
    </div>
  );
};
export default MovieList;
