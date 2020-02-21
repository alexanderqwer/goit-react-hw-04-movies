import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

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
      <Navigation />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:id" component={MovieDetalisPage} />
            <Route path="/movies" component={MoviePage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
