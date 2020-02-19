import React, { Component } from 'react';
import * as API from '../../Services/api';

const BASEPOSTERURL = 'https://image.tmdb.org/t/p/w185';

export default class Cast extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getDataCast();
  }

  getDataCast = () => {
    API.getCast(550)
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
