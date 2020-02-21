import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../Services/api';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = { data: [] };

  componentDidMount() {
    this.getDataReviews();
  }

  getDataReviews = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    API.getReviews(movieId)
      .then(({ data }) => this.setState({ data: data.results }))
      .catch(error => alert(error));
  };

  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.length > 0 ? (
          data.map(item => (
            <li key={item.id}>
              <h3>{item.authour}</h3>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>We dont have any reviews for this movie.</p>
        )}
      </ul>
    );
  }
}
