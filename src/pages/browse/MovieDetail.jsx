import React, { useEffect, useState, useCallback } from "react";
import YouTube from "react-youtube";
import "./MovieDetail.css";

const MovieDetail = (props) => {
  const API_KEY = "829eebc9305fe5b2c89259c54363b7e6";

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const [keyVideo, setKeyVideo] = useState("");

  const [showVideo, setShowVideo] = useState(false);

  const fetchDetailMovieHandler = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3//movie/${props.detailMovie.id}/videos?api_key=${API_KEY}`
    );

    const data = await response.json();

    if (data.success === false) {
      setShowVideo(false);
      return;
    }

    if (data.id !== "") {
      const detailVideo = data.results.map(
        (detailVideoData) => detailVideoData
      );

      if (detailVideo.length === 0) {
        setShowVideo(false);
        return;
      }

      if (detailVideo.length >= 1) {
        setShowVideo(true);
        setKeyVideo(detailVideo[0].key);
      }
    }
  }, [props.detailMovie.id]);

  useEffect(() => {
    fetchDetailMovieHandler();
  }, [fetchDetailMovieHandler]);

  return (
    <div className="movie-detail">
      <div className="movie_detail__content">
        <h2>
          {props.detailMovie.title
            ? props.detailMovie.title
            : props.detailMovie.name}
        </h2>
        <p>
          {props.detailMovie.release_date
            ? `Release Date: ${props.detailMovie.release_date}`
            : `Release Date: ${props.detailMovie.first_air_date}`}
        </p>
        <p>{`Vote: ${props.detailMovie.vote_average}/10`}</p>
        <p>{props.detailMovie.overview}</p>
      </div>
      {showVideo ? (
        <YouTube
          videoId={keyVideo}
          opts={opts}
          className="movie-detail__video"
        ></YouTube>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.detailMovie.backdrop_path}`}
          alt={props.detailMovie.title}
          className="movie-detail__img"
        ></img>
      )}
    </div>
  );
};

export default MovieDetail;
