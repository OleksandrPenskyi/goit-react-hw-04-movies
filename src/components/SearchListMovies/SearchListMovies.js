import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchListMovies = ({ moviesList, url }) => (
  <ul>
    {moviesList.map(({ title, original_title, id }) => (
      <li key={id}>
        <NavLink to={`${url}/${id}`}>{title || original_title}</NavLink>
      </li>
    ))}
  </ul>
);

export default SearchListMovies;
