import React, { useState, useEffect } from "react";
import axios from "./axios";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import request from "./Request";
const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixoriginals);
      return setMovies(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${
            movies.backdrop_path ? movies.backdrop_path : movies.poster_path
          })`,
          backgroundPosition: "center",
          height: "500px",
          widht: "100%",
        }}
      >
        <h1 className="movies-title">
          {" "}
          {movies.title ? movies.title : movies.name}{" "}
        </h1>
        <div className="banner_buttons">
          <button className="banner-btn play">Play </button>
          <button className="banner-btn list">My List </button>
        </div>
        <h5> {truncate(movies.overview, 150)}</h5>
        <div className="banner_fade_bottom"> </div>
      </div>
    </>
  );
};

export default Header;
