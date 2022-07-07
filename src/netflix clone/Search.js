import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import path from "./RoutingConstant";

const Search = ({ movieData, query, setMovie }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  let movieDataFetch = (movie) => {
    setMovie(movie);
  };

  return (
    <div
      className="row"
      style={{ marginTop: "50px", marginLeft: "10px", marginBottom: "10px" }}
    >
      {/* title */}
      <h2> {query}</h2>
      <div className="row-posters-column">
        {movieData?.map((movie) => {
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
                className={`row_poster   `}
                key={movie.id}
                src={`${baseURL}${
                  movie?.poster_path ? movie.poster_path : movie.backdrop_path
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

export default Search;
