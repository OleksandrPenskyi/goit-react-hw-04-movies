import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';

const MoviesList = ({ moviesList, location }) => (
  <ul>
    {moviesList.map(({ title, original_title, id }) => (
      <li key={id}>
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
