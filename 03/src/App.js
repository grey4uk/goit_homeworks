import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Route, Redirect, Switch, withRouter } from "react-router-dom";

const LazyLoadHomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: 'HomePage' */)
);
const LazyLoadMoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: 'MoviesPage' */)
);
const LazyLoadDetailedMoviePage = lazy(() =>
  import("./pages/DetailedMovie" /* webpackChunkName: 'DetailedMoviePage' */)
);

const App = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    setMovies(["Equilibrium", "Lost", "Lord of the ring"]);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <NavLink
        exact
        to="/home"
        style={{ marginRight: "20px" }}
        activeStyle={{ color: "tomato" }}
      >
        HOME
      </NavLink>
      <NavLink to="/movies" activeStyle={{ color: "tomato" }}>
        MOVIES
      </NavLink>
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
            <Suspense fallback={<h1>LOADING</h1>}>
              <LazyLoadHomePage />
            </Suspense>
          )}
        />
        <Route
          path="/movies"
          render={() => (
            <Suspense fallback={<h1>LOADING</h1>}>
              <LazyLoadMoviesPage films={movies} />
            </Suspense>
          )}
        />
        <Route
          path="/movie/:id"
          render={() => (
            <Suspense fallback={<h1>LOADING</h1>}>
              <LazyLoadDetailedMoviePage films={movies} />
            </Suspense>
          )}
        />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default withRouter(App);
