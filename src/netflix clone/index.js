import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Loader";
import path from "./RoutingConstant";
import "./netflix.css";
const LogIn = lazy(() => import("./LogIn"));
const Landing = lazy(() => import("./Landing"));
const Header = lazy(() => import("./Header"));
const Home = lazy(() => import("./Home"));
const MovieDetails = lazy(() => import("./MovieDetails"));

const Index = () => {
  const [token, setToken] = useState();
  const [movie, setMovie] = useState();

  return (
    <Router>
      <div>
        <Suspense fallback={<Loader />}>
          {/* <MovieDetails   /> */}
          <Route exact path="/" render={() => <LogIn />} />
          <Route path={path.user} render={() => <Landing />} />
          <Route
            exact
            path={path.details}
            render={() => <MovieDetails prop={movie} />}
          />
          <Route
            exact
            path={path.main_page}
            render={(props) => <Home setMovie={setMovie} />}
          />
        </Suspense>
      </div>
    </Router>
  );
};

export default Index;
