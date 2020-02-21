import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as API from '../../services/api';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchMoviesList();
  }

  fetchMoviesList = () => {
    API.getTrading()
      .then(({ data }) => this.setState({ movies: data.results }))
      .catch(error => alert(error));
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {movies.length > 0 &&
            movies.map(item => (
              <li key={item.id}>
                <NavLink to={`/movies/${item.id}`}>
                  {item.name || item.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
