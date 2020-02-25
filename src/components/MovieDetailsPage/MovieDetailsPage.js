import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';
import * as API from '../../services/api';
import Styles from './MovieDetailsPage.module.css';
import * as routes from '../../services/routes';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = { data: [] };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.getDataMovieDetails(id);
  }

  getDataMovieDetails = id => {
    API.getMovieDetails(id)
      .then(({ data }) => this.setState({ data }))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error));
  };

  goBackToHisroty = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { data } = this.state;
    const { match } = this.props;
    const { id } = match.params;
    return (
      <>
        {data.poster_path && (
          <div>
            <>
              <div>
                <div>
                  <button type="button" onClick={this.goBackToHisroty}>
                    Go back
                  </button>
                  <img src={`${API.BASEIMGURL}${data.poster_path}`} alt="" />
                </div>
                <div>
                  <h2>{data.original_title}</h2>
                  <p>User Score: {data.vote_average}</p>
                  <h3>Overview</h3>
                  <p>{data.overview}</p>
                  <h3>Genres</h3>
                  <ul>
                    {data.genres &&
                      data.genres.map(item => (
                        <li key={item.id}>{item.name}</li>
                      ))}
                  </ul>
                </div>
              </div>
              <section>
                <h3>additional information</h3>
                <ul className={Styles.list}>
                  <li className={Styles.item}>
                    <NavLink
                      to={`/movies/${id}/cast`}
                      replace
                      activeClassName={Styles.linkActive}
                      className={Styles.link}
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li className={Styles.item}>
                    <NavLink
                      to={`/movies/${id}/reviews`}
                      replace
                      activeClassName={Styles.linkActive}
                      className={Styles.link}
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route
                      path={routes.CAST.path}
                      component={routes.CAST.component}
                    />
                    <Route
                      path={routes.REVIEWS.path}
                      component={routes.REVIEWS.component}
                    />
                  </Switch>
                </Suspense>
              </section>
            </>
          </div>
        )}
      </>
    );
  }
}
