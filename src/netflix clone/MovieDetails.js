import React, { useState, useEffect } from "react";
import "./movieDetails.css";
import { useHistory } from "react-router-dom";

const MoviePage = (movie) => {
  const [trailerURL, setTrailerURL] = useState("");
  let history = useHistory();

  return (
    <div className="main-div">
      <div className="imageContainer">
        <img
          className=""
          src={`https://image.tmdb.org/t/p/original/${
            movie?.prop?.poster_path
              ? movie?.prop?.poster_path
              : movie?.prop?.backdrop_path
          }`}
          alt="movie banner"
        />
      </div>
      <div className="detail-container">
        <h4>
          Original Name:
          <br />
          <h1>{movie?.prop?.title ? movie?.prop?.title : movie?.prop?.name}</h1>
        </h4>
        <p> {movie?.prop?.overview}</p>
        <h5 style={{ margin: "0px" }}>Rating: {movie?.prop?.vote_average}</h5>
        <div className="btn-container">
          <button className="btn-back" onClick={() => history.goBack()}>
            Back To Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
