import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePageList = ({ movies }) => (
  <ul>
    {movies.map(({ id, original_title }) => (
      <li key={id}>
        <NavLink to={`${this.props.match.url}/${id}`}>{original_title}</NavLink>
      </li>
    ))}
  </ul>
);

export default HomePageList;
