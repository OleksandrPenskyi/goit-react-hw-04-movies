import React from 'react';
import { NavLink } from 'react-router-dom';

const TrendMoviesList = ({ trendMovies, title }) => (
  <>
    <h2>{title}</h2>

    <ul>
      {trendMovies.map(({ id, original_title, title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{original_title || title}</NavLink>
        </li>
      ))}
    </ul>
  </>
);

export default TrendMoviesList;
