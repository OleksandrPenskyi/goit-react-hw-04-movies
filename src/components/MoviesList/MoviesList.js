import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';

import styles from './MoviesList.module.css';

const MoviesList = ({ moviesList, location }) => (
  <ul className={styles.List}>
    {moviesList.map(({ title, original_title, id }) => (
      <li className={styles.Item} key={id}>
        <NavLink
          to={{
            pathname: `${routes.movies}/${id}`,
            state: { from: location },
          }}
        >
          {original_title || title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default withRouter(MoviesList);
