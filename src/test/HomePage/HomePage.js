import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as API from '../../Services/api';

export default class HomePage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getDataAPI();
  }

  getDataAPI = () => {
    API.getTrading()
      .then(({ data }) => this.setState({ data: data.results }))
      .catch(error => alert(error));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
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
