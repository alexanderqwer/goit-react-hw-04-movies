import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import * as routes from '../services/routes';

const App = () => {
  return (
    <>
      <Navigation />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path={routes.HOME_PAGE.path}
              component={routes.HOME_PAGE.component}
            />
            <Route
              path={routes.MOVIE_DETAILS_PAGE.path}
              component={routes.MOVIE_DETAILS_PAGE.component}
            />
            <Route
              path={routes.MOVIE_PAGE.path}
              component={routes.MOVIE_PAGE.component}
            />
            <Redirect to={routes.HOME_PAGE.path} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
