import React from 'react';
import PropTypes from 'prop-types';

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
    <div className={styles.Container}>
      <img
        className={styles.Image}
        src={moviePoster}
        alt={`${title} moviePoster`}
      />
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

MovieInfo.defaultProps = {
  title: 'No information',
  overview: 'No information',
  genres: 'No information',
  moviePoster: 'No information',
  release_date: 'No information',
  vote_average: 'No information',
};

MovieInfo.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  moviePoster: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
