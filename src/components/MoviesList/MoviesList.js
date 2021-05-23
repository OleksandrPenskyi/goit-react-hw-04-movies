import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';

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

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    }),
  ),

  location: PropTypes.object.isRequired,
};
