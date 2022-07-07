import React, { useState, useEffect } from "react";
import request from "./Request";
import Row from "./Row";
import "./netflix.css";
import Banner from "./Bannner";
import Header from "./Header";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from "./Search";
import path from "./RoutingConstant";

const Home = ({ setMovie }) => {
  const [movieData, setMovieData] = useState([]);
  const [movieShow, setMovieShow] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const API_KEY = "5bfb829b451ecc3a784c5d9e5e07cfee";
    let fetchMovie = async () => {
      const movieApi = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const dataFetched = await movieApi.json();
      let results = dataFetched.results;
      return setMovieData(results);
    };
    fetchMovie();
    console.log(movieData);
  }, [query]);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Header setMovieData={setMovieData} setQuery={setQuery} />
      <Banner />
      {query ? (
        <Search movieData={movieData} query={query} setMovie={setMovie} />
      ) : (
        <div>
          <Row
            title="Netflix Originals"
            fetchUrl={request.fetchNetflixoriginals}
            isLargeRow
            setMovie={setMovie}
            results
          />
          <Row
            title="Comedy"
            fetchUrl={request.fetchComedyMovies}
            setMovie={setMovie}
          />
          <Row
            title="Horror"
            fetchUrl={request.fetchHorrorMovies}
            setMovie={setMovie}
          />
          <Row
            title="Top Rated"
            fetchUrl={request.fetchTopRated}
            setMovie={setMovie}
          />
          <Row
            title="Documentries"
            fetchUrl={request.fetchDocumentaries}
            setMovie={setMovie}
          />
          <Row
            title="Action"
            fetchUrl={request.fetchActionMovies}
            setMovie={setMovie}
          />
          <Row
            title="Trending"
            fetchUrl={request.fetchTrending}
            setMovie={setMovie}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
