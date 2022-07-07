import React, { useState, useEffect } from "react";
import axios from "./axios";
import path from "./RoutingConstant";

import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow, setMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  let movieDataFetch = (movie) => {
    setMovie(movie);
  };

  return (
    <div
      className="row"
      style={{ marginTop: "50px", marginLeft: "10px", marginBottom: "10px" }}
    >
      {/* title */}
      <h2> {title}</h2>
      <div className="row-posters">
        {movies?.map((movie) => {
          return (
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              className="movies-database"
              key={movie?.id}
              onClick={() => movieDataFetch(movie)}
              to={path?.details}
              state={movie}
            >
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                key={movie.id}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <div className="detail" style={{}}>
                <p
                  className="title"
                  style={{
                    margin: "0px",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  {movie?.name ? movie?.name : movie?.title}{" "}
                </p>
                <p
                  className="rating"
                  style={{
                    margin: "0px",
                    fontWeight: "400",
                    fontSize: "15px",
                  }}
                >
                  Rating: {movie?.vote_average}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      {/* TRAILERS */}
    </div>
  );
};

export default Row;
