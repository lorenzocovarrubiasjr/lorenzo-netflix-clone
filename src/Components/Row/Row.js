import React, { useState, useEffect } from "react";
import "./Row.scss";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import { BASE_URL, getLorenzosPicks } from "../../requests";

const poster_base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow, lorenzosPicks }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    if (fetchUrl) {
      async function fetchData() {
        const request = await axios({ url: fetchUrl, baseURL: BASE_URL });
        setMovies(request.data.results);
      }

      fetchData();
    }
    if (lorenzosPicks) {
      setMovies(getLorenzosPicks);
    }
  }, [fetchUrl, lorenzosPicks]);

  const trailerOptions = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else if (movie.name === "Blood In Blood Out") {
      setTrailerUrl(movie.videoId);
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            setTrailerUrl("UQcRDYMKMEI");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="posters-row">
        {movies.map((movie, index) => (
          <img
            key={Math.floor(Math.random() * movie.id)}
            src={
              lorenzosPicks
                ? movie.poster_path
                : `${poster_base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`
            }
            alt={movie.name}
            onClick={() => handleClick(movie)}
            className={`${isLargeRow ? "largeRowPoster" : "poster"}`}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={trailerOptions} />}
    </div>
  );
}

export default Row;
