import React from 'react';
import noPicture from '../../img/noPicture.jpg';
import PropTypes from 'prop-types';

import styles from './Cast.module.css';

const Cast = ({ cast }) => (
  <ul className={styles.List}>
    {cast.map(({ name, original_name, id, profile_path, character }) => (
      <li className={styles.Item} key={id}>
        <img
          className={styles.Pic}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : noPicture
          }
          alt={name}
        />
        <h2 className={styles.Name}>{name || original_name}</h2>
        <p>Character: {character}</p>
      </li>
    ))}
  </ul>
);

export default Cast;

Cast.defaultProps = {
  profile_path: noPicture,
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
    }),
  ),
};
