import React, { useState, useEffect } from "react";
import "./Row.scss";
import axios from "axios";
import { BASE_URL } from "../../requests";

const poster_base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios({ url: fetchUrl, baseURL: BASE_URL });
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="posters-row">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${poster_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`${isLargeRow ? "largeRowPoster" : "poster"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
