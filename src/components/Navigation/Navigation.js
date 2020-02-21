import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <NavLink
            exact
            to="/"
            className={Styles.link}
            activeClassName={Styles.linkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={Styles.item}>
          <NavLink
            to="/movies"
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
