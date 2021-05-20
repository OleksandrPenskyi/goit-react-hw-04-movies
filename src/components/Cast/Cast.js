import React from 'react';

const Cast = ({ cast }) => (
  <ul>
    {cast.map(({ name, original_name, id, profile_path, character }) => (
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
        <h2>{name || original_name}</h2>
        <p>Character: {character}</p>
      </li>
    ))}
  </ul>
);

//todo заглушка на фото

export default Cast;
