import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";
import { BASE_URL, requests } from "../../requests";

const banner_base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios({
        baseURL: BASE_URL,
        url: requests.fetchDocumentaries,
      });
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  //Found on StackOverflow
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${banner_base_url}${movie.backdrop_path})`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>

        <h1 className="banner-desc">{truncate(movie?.overview, 200)}</h1>
      </div>
    </header>
  );
}

export default Banner;
