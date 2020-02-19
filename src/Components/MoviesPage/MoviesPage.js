import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import * as API from '../../Services/api';

export default class MoviesPage extends Component {
  state = {
    data: [],
    input: '',
    search: '',
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string,
      pathname: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;
    if (search.length > 0) {
      this.setState({ search: queryString.parse(search).query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.getDataMovieList(search);
    }
  }

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    this.setState({ search: input });

    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `query=${input}`,
    });
  };

  getDataMovieList = query => {
    API.getMovieList(query)
      .then(({ data }) => this.setState({ data: data.results }))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error));
  };

  render() {
    const { data, input } = this.state;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} value={input} name="input" />
          <button type="submit" onClick={this.goBackToHisroty}>
            Search
          </button>
        </form>
        <ul>
          {data.length > 0 &&
            data.map(item => (
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
