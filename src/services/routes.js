import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../components/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetalisPage = lazy(() =>
  import(
    '../components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetalisPage" */
  ),
);
const MoviePage = lazy(() =>
  import(
    '../components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviePage" */
  ),
);
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);
const Cast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "Cast" */),
);

export const HOME_PAGE = {
  path: '/',
  component: HomePage,
};

export const MOVIE_DETAILS_PAGE = {
  path: '/movies/:id',
  component: MovieDetalisPage,
};

export const MOVIE_PAGE = { path: '/movies', component: MoviePage };

export const REVIEWS = { path: '/movies/:movieId/reviews', component: Reviews };

export const CAST = { path: '/movies/:movieId/cast', component: Cast };
