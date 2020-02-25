import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navigation.module.css';
import * as routes from '../../services/routes';

export default function Navigation() {
  return (
    <nav>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <NavLink
            exact
            to={routes.HOME_PAGE.path}
            className={Styles.link}
            activeClassName={Styles.linkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={Styles.item}>
          <NavLink
            to={routes.MOVIE_PAGE.path}
            className={Styles.link}
            activeClassName={Styles.linkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
