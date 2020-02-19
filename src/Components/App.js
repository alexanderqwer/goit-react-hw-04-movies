import React, { lazy, Suspense } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetalisPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetalisPage" */
  ),
);
const MoviePage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: "MoviePage" */),
);

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:id" component={MovieDetalisPage} />
            <Route path="/movies" component={MoviePage} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
