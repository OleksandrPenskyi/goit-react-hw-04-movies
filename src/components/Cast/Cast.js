import React from 'react';
import noPicture from '../../img/noPicture.jpg';

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
