import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../Services/api';

const BASEPOSTERURL = 'https://image.tmdb.org/t/p/w185';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  state = { data: [] };

  componentDidMount() {
    this.getDataCast();
  }

  getDataCast = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    API.getCast(movieId)
      .then(({ data }) => this.setState({ data: data.cast }))
      .catch(error => alert(error));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <ul>
          {data.length > 0 &&
            data.map(item => (
              <li key={item.id}>
                {item.profile_path && (
                  <img src={`${BASEPOSTERURL}${item.profile_path}`} alt="" />
                )}
                <p>{item.name}</p>
                <p>character: {item.character} </p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
