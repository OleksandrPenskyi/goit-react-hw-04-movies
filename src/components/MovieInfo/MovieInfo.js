import React from 'react';
import styles from './MovieInfo.module.css';

const MovieInfo = ({
  title,
  overview,
  genres,
  moviePoster,
  release_date,
  vote_average,
}) => (
  <div className={styles.MovieInfo}>
    <div className={styles.panel}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={moviePoster}
          alt={`${title} moviePoster`}
        />
      </div>
    </div>

    <div className={styles.Info__wrapper}>
      <h2 className={styles.Title}>
        {title} ({release_date})
      </h2>
      <p>Rating IMDB: {vote_average}</p>
      <p className={styles.Overview}>
        <b className={styles.Title}>Overview</b>
        <span>{overview}</span>
      </p>
      <b className={styles.Title}>Genres</b>
      {genres && (
        <ul className={styles.Genres__list}>
          {genres.map(({ id, name }) => (
            <li className={styles.Genres__item} key={id}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default MovieInfo;
